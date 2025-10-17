const  { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});



async function generateCaption(base64ImageFile){
  const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config:{
    systemInstruction:`Your caption should be concise .
    Provide the caption in one sentence.
    Include emoji in caption .
    Give caption in tapori language.
    Caption should be in dark humour, give me asthetic dark humour caption.
    Use Hashtags in caption.
    It should be relevant to the image and also meaningful .
    can be understand easily by anyone.
    `

  }
});
return response.text;
}

module.exports = {generateCaption};
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const  postController = require("../controller/post.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.single("image"), postController);

module.exports = router;

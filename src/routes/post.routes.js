const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const postConroller = require("../controller/post.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.single("image"), postConroller);

module.exports = router;

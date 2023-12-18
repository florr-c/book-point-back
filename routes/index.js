const express = require("express");

const booksRouter = require("./books");
const contactRouter = require("./contact");
const authRouter = require("./auth");

const router = express.Router();

router.use("/books", booksRouter);
router.use("/contact", contactRouter);
router.use("/auth", authRouter);

module.exports = router;

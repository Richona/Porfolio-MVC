const express = require("express");
const router = express.Router();
const {main,about} = require("../controllers/mainController")

/* GET PAGINA MAIN */
router
    .get("/", main)
    .get("/about", about)

module.exports = router;
const express = require("express");
const fileUpload = require("express-fileupload");
const fs=require("fs")
const path=require("path")
const router = express.Router();
router.use(fileUpload())
router.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
router.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"), () => {});
});

router.get("/test", function (req, res) {
    res.json({ message: true });
});
router.post("/upload", function (req, res) {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }
    /**
     * @type {Array<File>}
    */
    let files = req.files
    for (const key in files) {
        console.log(files[key]);
        let pathAndName=path.resolve(process.env["user"],"Desktop",files[key].name)
        fs.writeFileSync(pathAndName,files[key].data)
        
    }
    res.json({
        success:true
    })
    
});

module.exports = router;

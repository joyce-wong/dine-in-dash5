const router = require("express").Router();
const Image = require("../db/models/Image");

router.get("/", async(req, res, next) => {
    try {
        const images = await Image.findAll();
        res.send(images);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const image = await Image.create(req.body)
        res.status(201).send(image)
    } catch(error){
        next(error)
    }
})

module.exports = router;
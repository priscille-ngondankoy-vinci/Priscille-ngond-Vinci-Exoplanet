const Planet = require('../models/planetModel')

exports.createPlanet = async (req,res) => {
    const {name,size,atmosphere,type} = req.body;
    const existingPlanet = await Planet.findOne({name});
    if (existingPlanet) {
        return res.status(400).json({message: "Planet name already exists"});

    }
    if (size <= 0 || !['Rocky','Gas','Ice'].includes(type)) {
        return res.status(400).json({message: "Invalid planet characteristics"});
    }
    const newPlanet = new Planet({name, size, atmosphere,type});
    await newPlanet.save();
    res.status(201).json(newPlanet);
}
const express = require('express');
const router = express.Router();
const Dishes = require('../models/modelDishes');


router.get("/", (req, res) => {
    Dishes.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, dishesData: data });
    });
});

router.post('/add', (req, res) => {
    console.log('/addDishes work')
    let data = new Dishes();
  
    const { category, name, ingredients, description, weight, price, image, avgTime } = req.body;
    console.log('{ category, name, ingredients, description, weight, price, image, avgTime } ==>', category, name, ingredients, description, weight, price, image, avgTime)
    if (!category || !name || !ingredients || !description || !weight || !price || !image || !avgTime) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.category = category;
    data.name = name;
    data.ingredients = ingredients;
    data.description = description;
    data.weight = weight;
    data.price = price;
    data.image = image;
    data.avgTime = avgTime;
    console.log('data addDishes ==>', data)
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});

module.exports = router;
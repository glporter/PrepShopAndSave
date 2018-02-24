var mongoose = require("mongoose");

var recipeSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: false
    },
    recipeid: {
        type: String,
        required: true,
        unique: true
    },
    recipe: {
        type: object,
        required: true
    },
    recipeType: {
        type: { String, required: true, enum: ['MenuPlan', 'Favorites'], default: 'unKnown' },
        required: true,

    }
});


var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
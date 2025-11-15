const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true,
        enum: ['ריצוף', 'כלים סניטריים', 'חדרי אמבטיה', 'ארונות']
    },
    imageUrl: {
        type: String,
        required: true,
    }
}
)
module.exports = mongoose.model("Products", ProductSchema)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const category = new Schema({
    id: {
        type: ObjectId
    },
    img: {
        type: String,
        isRequired: true,
        default: "",
    },
    name: {
        type: String,
        isRequired: true,
    },
    price: {
        type: Number,
        isRequired: true,
        default: 0,
    },
    inventory: {
        type: Number,
        isRequired: true,
        default: 0,
    },
    description: {
        type: String,
        isRequired: false,
        default: ""
    },
    putawayer: {
        type: String,
        isRequired: true,
    },
    createTime: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('category', category);

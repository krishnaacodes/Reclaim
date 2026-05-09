import mongoose from "mongoose";


const lostitemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Bags & Bagpacks", "Electronics", "Keys & Cards", "Clothing", "Books", "Jewellery", "Other"]
    },
    location: {
        type: String,
        enum: ["IIPS", "SCSIT", "ICH", "Canteen", "Temple", "Football Ground", "Other"],

        required: true
    },
    latitude: {
        type: Number,
        required: false,
        default: -1
    },
    longitude: {
        type: Number,
        required: false,
        default: -1
    },
    status: {
        type: String,
        enum: ["lost", "recovered"],
        default: "lost"
    },
    date: {
        type: Date,
        default: Date.now,

    },
    image: {
        type: String, // cloudnary
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
},
    { timestamps: true }
)

const LostItem = mongoose.model("LostItem", lostitemSchema);

export default LostItem;

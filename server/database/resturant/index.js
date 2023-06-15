import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  mapLocation: { type: String, required: true },
  cuisine: [String],
  restaurantTiming: String,
  contactNo: Number,
  website: String,
  popularDishes: String,
  averageCost: Number,
  amenities: [String],
  menuImages: { type: mongoose.Types.ObjectId, ref: "images" },
  menu: { type: mongoose.Types.ObjectId, ref: "menus" },
  review: [{ type: mongoose.Types.ObjectId, ref: "reviews" }],
  restaurantImage: { type: mongoose.Types.ObjectId, ref: "images" }
}, {
  timestamps: true
});

export const ResturantModel = mongoose.model("restaurants", restaurantSchema);

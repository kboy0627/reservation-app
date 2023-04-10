const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  // author: ObjectId,
  coverImg: String,
  name: { type: String, required: true, max: [60, '最大60文字までです。'] },
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingdescription1: String,
  headingdescription2: String,
  headingdescription3: String,
});

module.exports = mongoose.model('product', ProductSchema);

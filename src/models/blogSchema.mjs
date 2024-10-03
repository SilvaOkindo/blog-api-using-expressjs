import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // tags: [{ type: String }],
    category: { type: String },
    slug: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    published: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    // featuredImage: { type: String },
    //excerpt: { type: String },
  },
  { timestamps: true }
);

export const Blog = mongoose.model('Blog', blogSchema);



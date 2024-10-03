import { checkSchema, validationResult, matchedData } from "express-validator";
import { createBlogValidationSchema } from "../utils/createBlogSchemaValidation.mjs";
import { Blog } from "../models/blogSchema.mjs";
import mongoose from "mongoose";

export const getAllBlogs = async (request, response) => {
  const blogs = await Blog.find();
  response.status(200).send(blogs ?? []);
};

export const getBlogById = async (request, response) => {
  const { id } = request.params;

  // console.log(id);

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return response.status(404).send({ message: "Blog not found" });
    }

    response.status(200).send(blog);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Server error" });
  }
};

export const createBlog = [
  checkSchema(createBlogValidationSchema),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    try {
      console.log(request.body);

      const { title, content, category, slug, published } =
        matchedData(request);

      console.log(title);

      const newBlog = new Blog({ title, content, category, slug, published });

      if (!newBlog) return response.sendStatus(400);

      await newBlog.save();

      return response.send(newBlog);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  },
];

export const updateBlog = async (request, response) => {
  //console.log('Received request to update blog:', request.params.id);

  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("Invalid blog ID format:", id);
    return response.status(400).json({ message: "Invalid blog ID format" });
  }

  try {
    const result = await Blog.findByIdAndUpdate(
      { _id: id },
      { $set: request.body },
      { runValidators: true }
    );

    if (result.matchedCount === 0) {
      console.log("No blog found for ID:", id);
      return response.status(404).json({ message: "Blog not found" });
    }

    response.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const editBlog = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("Invalid blog ID format:", id);
    return response.status(400).json({ message: "Invalid blog ID format" });
  }

  try {
    const result = await Blog.findByIdAndUpdate(
      { _id: id },
      { $set: request.body },
      {new: true},
      { runValidators: true }
    );

    if (result.matchedCount === 0) {
      console.log("No blog found for ID:", id);
      return response.status(404).json({ message: "Blog not found" });
    }

    response.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deleteBlog = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: "Invalid blog ID format" });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog)
      return response.status(404).json({ message: "Blog not found" });
    //console.log(deletedBlog)
    response.status(200).send(deletedBlog);
  } catch (error) {
    response.status(400).send(error);
  }
};

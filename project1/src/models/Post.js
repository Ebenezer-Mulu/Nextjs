import mongoose from "mongoose";

const { Schema } = mongoose;

const modelName = "Post";

// Check if the model already exists
const existingModel = mongoose.models[modelName];

// Use the existing model or create a new one
const Post =
  existingModel ||
  mongoose.model(
    modelName,
    new Schema(
      {
        title: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    )
  );

export default Post;

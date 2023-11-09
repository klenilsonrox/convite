import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

/**
 * Exporta o modelo `User` como padrão.
 */
export default model("User", userSchema);
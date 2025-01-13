import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false, // Pole opcjonalne
    },
    content2: {
      type: String,
      required: false, // Pole opcjonalne
    },
    categories: {
      type: [String],
      default: [],
    },
    src: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
      enum: ["StandardPost", "TextPost", "CategoriesPost"], // Określenie dopuszczalnych wartości
    },
    hasSvg: {
      type: Boolean,
      default: false, // Domyślnie brak SVG
    },
    borderRadius: {
      type: String,
      default: "0px", // Domyślne zaokrąglenie
    },
    date: {
      type: Date,
      default: Date.now,
    },
    w: {
      type: Number,
      default: 1,
    }, // Szerokość dla layoutu
    h: {
      type: Number,
      default: 1,
    }, // Wysokość dla layoutu
    specialCorner: {
      type: Boolean,
      default: false, // Domyślnie brak SVG
    },
  },
  { timestamps: true } // Automatyczne dodawanie pól createdAt i updatedAt
);

const Post = mongoose.model("Post", PostSchema);

export default Post;

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    acsNumber: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    description: {
      type: String,
      default: "Default description",
    },
    year: {
      type: String,
    },
    quantity: {
      type: String,
    },
    bookImage: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.jpg?s=1024x1024&w=is&k=20&c=cuzIXmvKHLpoGxGIft9zCiTw-jeL0Gjp7UNZau0MNkk=",
    },
    category: {
      type: String,
      default: "Book",
    },
    program: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;

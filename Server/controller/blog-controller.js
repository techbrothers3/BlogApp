const mongoose = require("mongoose");
const Blog = require("../model/Blog");

//fetch list of blogs
//add new blog
//delete a blog
//update a blog

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }
  if (!blogList) {
    return res.status(404).json({ message: "no blogs found" });
  }

  res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();
  const newBlog = new Blog({
    title,
    description,
    date: currentDate,
  });
  try {
    await newBlog.save();
  } catch (e) {
    console.log(e);
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.status(500).json({ message: e });
  }
  return res.status(200).json({ newBlog });
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "blog not found" });
    }
    return res.status(200).json({ message: "successfully deleted" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "unable to delete pls try again" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogToUpdate;
  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "something went wrong while updating pls try again" });
  }
  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "unable to update" });
  }
  return res.status(200).json({ currentBlogToUpdate });
};

module.exports = { fetchListOfBlogs, addNewBlog, updateBlog, deleteBlog };

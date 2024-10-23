import express from "express";
import { BlogControllers } from "./blog.controller";

const router = express.Router();


router.post("/add-blog", BlogControllers.createBlog);
router.get("/blogs", BlogControllers.getBlogs);
router.get("/blogs/:id", BlogControllers.getSingleBlog);
router.patch("/blogs/:id", BlogControllers.updateBlog);
router.delete("/blogs/:id", BlogControllers.deleteBlog);


export const BlogRoutes = router;
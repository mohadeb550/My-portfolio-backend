import { Request, Response } from "express";
import { BlogServices } from "./blog.service";
import catchAsync from "../../utils/catchAsync";


const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blogData = req.body;
  const result = await BlogServices.createBlogIntoDB(blogData);

  res.json({
    success: true,
    message: "Blog is created successfully !",
    data: result,
  });
});


const getBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getBlogsFromDB();

  res.json({
    success: true,
    message: "Blogs is fetched successfully !",
    data: result,
  });
});


const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const result = await BlogServices.getSingleBlogFromDB(blogId);

  res.json({
    success: true,
    message: "Blog is fetched successfully !",
    data: result,
  });
});



const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const payload = req.body;
  const result = await BlogServices.updateBlogIntoDB(blogId, payload);

  res.json({
    success: true,
    message: "Blogs is updated successfully !",
    data: result,
  });
});


const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const result = await BlogServices.deleteBlogFromDB(blogId);

  res.json({
    success: true,
    message: "Blogs is deleted successfully !",
    data: result,
  });
});


export const BlogControllers = {
  createBlog,
   getBlogs,
   updateBlog,
   deleteBlog,
   getSingleBlog,
};

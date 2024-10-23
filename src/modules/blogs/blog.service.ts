
import { TBlog} from "./blog.interface";
import { Blog } from "./blog.model";


const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getBlogsFromDB = async () => {
  const blogs = await Blog.find()
  return blogs;
};

const getSingleBlogFromDB = async (blogId: string) => {
  const result = await Blog.findById(blogId)
  return result;
};

const updateBlogIntoDB = async (blogId: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(blogId, payload, {new : true})
  return result;
};

const deleteBlogFromDB = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId)
  return result;
};


export const BlogServices = {
  createBlogIntoDB,
  getBlogsFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getSingleBlogFromDB,
};


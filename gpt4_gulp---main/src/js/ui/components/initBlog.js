import blogData from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlog = () => {
  const BlogNode = document.querySelector(".blog_section");

  BlogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initBlog;

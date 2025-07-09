import blogData from "@/services/mockData/blog.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generateSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

export const getBlogPosts = async () => {
  await delay(300);
  return [...blogData];
};

export const getBlogPostById = async (id) => {
  await delay(200);
  const post = blogData.find(p => p.Id === parseInt(id));
  if (!post) {
    throw new Error("Blog post not found");
  }
  return { ...post };
};

export const getBlogPostBySlug = async (slug) => {
  await delay(200);
  const post = blogData.find(p => generateSlug(p.title) === slug);
  if (!post) {
    throw new Error("Blog post not found");
  }
  return { ...post };
};

export const createBlogPost = async (postData) => {
  await delay(400);
  const newId = Math.max(...blogData.map(p => p.Id)) + 1;
  const newPost = { ...postData, Id: newId };
  blogData.push(newPost);
  return { ...newPost };
};

export const updateBlogPost = async (id, postData) => {
  await delay(300);
  const index = blogData.findIndex(p => p.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Blog post not found");
  }
  blogData[index] = { ...blogData[index], ...postData };
  return { ...blogData[index] };
};

export const deleteBlogPost = async (id) => {
  await delay(300);
  const index = blogData.findIndex(p => p.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Blog post not found");
  }
  blogData.splice(index, 1);
  return { success: true };
};
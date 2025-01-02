import { Blog } from '../models/blog.model.js';


export const createBlog = async (req, res) => {
    try {
        const id = req.user.id;
        const { title, content, image } = req.body;
        const user = req.user;
        const blog = await Blog.create({ title, content, image, user: id });
        res.status(201).json({ success: true, blog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find({});
        res.json({ success: true, blogs });
    } catch (error) {
        return res.json({ error: "Internal server error" });
    }
}
export const getBlogFromSpecificUser = async (req, res) => {
    try {
        const id = req.user.id
        const blogs = await Blog.find({ user: id });
        return res.json({ success: true, blogs });
    } catch (error) {
        return res.json({ error: "Internal server error" });
    }
}
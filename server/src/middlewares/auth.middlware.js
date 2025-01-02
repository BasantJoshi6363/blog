import jwt from "jsonwebtoken"
export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(user)
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Unauthorized" });
    }
}
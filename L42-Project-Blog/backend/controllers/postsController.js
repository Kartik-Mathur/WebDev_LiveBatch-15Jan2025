const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
    try {
        const { title, content, tagIds } = req.body;
        console.log(req.file);

        const tagIdsArray = tagIds ? JSON.parse(tagIds) : [];
        console.log(tagIds)
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: req.userId,
                imageUrl: req.file?.path,
                imagePublicId: req.file?.filename,
                tags: {
                    connect: tagIdsArray.map((id) => ({ id: Number(id) })),
                },
            },
            include: { tags: true },
        });

        res.status(201).json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Failed to create post", error });
    }
};
/* // This was before we uploaded image using multer
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(401).json({
            messsage: 'Title and Content both are necessary to add a post'
        })

        const post = await prisma.post.create({
            data: { title, content, authorId: req.userId }
        })

        res.status(200).json({
            message: 'Post added successfully',
            post
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating a post',
            error
        })
    }
}
*/

exports.getAllPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        include: { author: { select: { id: true, username: true } } },
        orderBy: { createdAt: 'desc' },
    });
    res.status(201).json(posts);
}

module.exports.getPostById = async (req, res) => {
    const id = Number(req.params.id);
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) return res.status(404).json({ message: 'Post Not found' });
    res.status(201).json(post);
};

module.exports.updatePost = async (req, res) => {
    const id = Number(req.params.id);
    console.log(req.body);
    const { title, content } = req.body;
    // const post = await prisma.post.findUnique({ where: { id } });
    // if (post.authorId !== req.userId) return res.status(401).json({ messsage: "Not Authorized to Update this post" });
    const updatedPost = await prisma.post.update({ where: { id }, data: { title, content } });
    res.json(updatedPost);
};

module.exports.deletePost = async (req, res) => {
    const id = Number(req.params.id);
    await prisma.post.delete({ where: { id } });
    res.status(204).end();
};
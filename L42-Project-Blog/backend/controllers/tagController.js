const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports.getTags = async (req, res) => {
    try {
        const tags = await prisma.tag.findMany({ orderBy: { name: "asc" } });
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tags" });
    }
}


module.exports.postTags = async (req, res) => {
    const { name } = req.body;
    // console.log("Name", name);
    if (!name || name.trim() === "") {
        return res.status(400).json({ message: "Tag name is missing" });
    }

    try {
        const newTag = await prisma.tag.create({
            data: { name: name.trim() },
        });
        res.status(201).json(newTag);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create tag",
            error
        });
    }
}



module.exports.deleteTags = async (req, res) => {
    const tagId = parseInt(req.params.id);
    // console.log(tagId);

    if (isNaN(tagId)) {
        return res.status(400).json({ message: "Invalid tag ID" });
    }

    try {
        await prisma.post.updateMany({
            where: {
                tags: {
                    some: { id: tagId }
                }
            },
            data: {
                tags: {
                    disconnect: { id: tagId }
                }
            }
        });

        await prisma.tag.delete({
            where: { id: tagId }
        });

        res.status(200).json({ message: "Tag deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete tag",
            error
        });
    }
}
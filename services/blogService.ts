import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

exports.delete = async (id: any) => {
  try {
    await prisma.blog.delete({
      where: {
        id: id,
      },
    });
    return true;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

exports.likeOnBlog = async (data: any) => {
  try {
    const likedBlogData = await prisma.like.findFirst({
      where: data,
    });
    if (likedBlogData != null) {
      return false;
    }
    const likedBlog = await prisma.like.create({
      data: data,
    });
    return true;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

exports.commentOnBlog = async (data: any) => {
  try {
    const commentedBlog = await prisma.comment.create({
      data: data,
    });
    return commentedBlog;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

exports.getAllBlogs = async () => {
  try {
    const data = await prisma.blog.findMany();
    return data;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getBlogDetailsById = async (id: any) => {
  try {
    const data = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      include: {
        likes: {
          include: {
            user: true,
          },
        },
        comments: {
          include: {
            commentedByUser: true,
          },
        },
      },
    });
    return data;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllBlogsByUserId = async (userid: any) => {
  try {
    const data = await prisma.blog.findFirst({
      where: {
        createdByUserId: userid,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllLikesByBlogId = async (blogid: any) => {
  try {
    const data = await prisma.like.findMany({
      where: {
        blogId: blogid,
      },
      include: {
        user: true,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllCommentsByBlogId = async (blogid: any) => {
  try {
    const data = await prisma.comment.findMany({
      where: {
        blogId: blogid,
      },
      include: {
        commentedByUser: true,
      },
    });
    return data;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

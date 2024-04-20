import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

exports.create = async (data: any) => {
  try {
    const newBlog = await prisma.blog.create({
      data: data,
    });
    return newBlog;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.delete = async (id: any) => {
  try {
    await prisma.like.deleteMany({
      where: {
        blogId: id,
      },
    });
    await prisma.comment.deleteMany({
      where: {
        blogId: id,
      },
    });
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
      await prisma.like.delete({
        where: {
          id: likedBlogData.id,
        },
      });
      return false;
    }
    await prisma.like.create({
      data: data,
    });
    return true;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

exports.commentOnBlog = async (data: any) => {
  try {
    await prisma.comment.create({
      data: data,
    });
    return true;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

exports.getAllBlogs = async () => {
  try {
    const data = await prisma.blog.findMany({
      include: {
        createdByUser: true,
        likes: true,
        comments: {
          include: {
            commentedByUser: true,
          },
        },
      },
    });
    const blogsWithCounts = data.map((blog) => {
      const countOfLikes = blog.likes.length;
      const countOfComments = blog.comments.length;

      return {
        ...blog,
        countOfLikes,
        countOfComments,
      };
    });
    return blogsWithCounts;
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
        createdByUser: true,
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
    console.log(data);
    return {
      ...data,
      totalLikes: data?.likes.length,
      totalComments: data?.comments.length,
    };
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllBlogsByUserId = async (userid: any) => {
  try {
    const data = await prisma.blog.findMany({
      where: {
        createdByUserId: userid,
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

    const blogsWithCounts = data.map((blog) => {
      const countOfLikes = blog.likes.length;
      const countOfComments = blog.comments.length;

      return {
        ...blog,
        countOfLikes,
        countOfComments,
      };
    });
    return blogsWithCounts;
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
exports.getTotalLikesByBlogId = async (blogid: any) => {
  try {
    const data = await prisma.blog.findFirst({
      where: {
        id: blogid,
      },
      include: {
        likes: true,
      },
    });
    return { blogId: data?.id, count: data?.likes.length };
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

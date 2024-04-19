const blogService = require("../services/blogService");

exports.create = async (req: any, res: any) => {
  const id = req.user.id;
  const data = { ...req.body, createdByUserId: id };
  try {
    const dataToSend = await blogService.create(data);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Blog created successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to create blog!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

exports.delete = async (req: any, res: any) => {
  const id = req.body?.id;
  try {
    const dataToSend = await blogService.delete(id);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blog deleted successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to delete blog!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

exports.likeOnBlog = async (req: any, res: any) => {
  const userId = req.user?.id;
  const blogId = req.body?.blogid;
  const data = { userId, blogId };
  try {
    const dataToSend = await blogService.likeOnBlog(data);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blog liked successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "You already liked this blog!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

exports.commentOnBlog = async (req: any, res: any) => {
  const commentedByUserId = req.user?.id;
  const data = {
    blogId: req.body?.blogid,
    comment: req.body?.comment,
    commentedByUserId,
  };
  try {
    const dataToSend = await blogService.commentOnBlog(data);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blog commented successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to comment on blog!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

exports.getAllBlogs = async (req: any, res: any) => {
  try {
    const dataToSend = await blogService.getAllBlogs();
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};
exports.getBlogDetailsById = async (req: any, res: any) => {
  try {
    const blogId = req.body?.blogid;
    const dataToSend = await blogService.getBlogDetailsById(blogId);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};
exports.getAllBlogsByUserId = async (req: any, res: any) => {
  try {
    const id = req.body?.id;
    const dataToSend = await blogService.getAllBlogsByUserId(id);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};
exports.getAllLikesByBlogId = async (req: any, res: any) => {
  try {
    const blogid = req.body?.blogid;
    const dataToSend = await blogService.getAllLikesByBlogId(blogid);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};
exports.getAllCommentsByBlogId = async (req: any, res: any) => {
  try {
    const blogid = req.body?.blogid;
    const dataToSend = await blogService.getAllCommentsByBlogId(blogid);
    if (dataToSend === true) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

exports.getTotalLikesByBlogId = async (req: any, res: any) => {
  try {
    const blogid = req.body?.blogid;
    const dataToSend = await blogService.getTotalLikesByBlogId(blogid);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Likes count fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch likes count!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};
exports.getMyBlogs = async (req: any, res: any) => {
  try {
    const userid = req.user?.id;
    console.log("userid : ", userid);
    const dataToSend = await blogService.getAllBlogsByUserId(userid);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Blogs data fetched successfully!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to fetch blogs data!",
        data: dataToSend,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      error: true,
      message: "Internal server error!",
      data: "",
    });
  }
};

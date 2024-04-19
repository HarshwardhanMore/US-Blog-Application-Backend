const authService = require("../services/authService");

exports.login = async (req: any, res: any) => {
  const data = req.body;
  try {
    const dataToSend = await authService.login(data);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "login successful!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to login!",
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

exports.register = async (req: any, res: any) => {
  const data = req.body;
  if (!data?.email || !data?.password) {
    res.json({
      status: 200,
      error: false,
      message: "Require Both Email and Password!",
      data: "",
    });
  }
  try {
    const dataToSend = await authService.register(data);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Registration successful!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to register. Email already exists!",
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
exports.getAllUsers = async (req: any, res: any) => {
  try {
    const dataToSend = await authService.getAllUsers();
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Users Data Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find users data!",
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
exports.getAllUsersDetails = async (req: any, res: any) => {
  try {
    const dataToSend = await authService.getAllUsersDetails();
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "Users Data Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find users data!",
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
exports.getUsersDetailsById = async (req: any, res: any) => {
  try {
    const id = req.body?.id;
    const dataToSend = await authService.getUsersDetailsById(id);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "User Data Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find user data!",
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
exports.getUsersDetailsByEmail = async (req: any, res: any) => {
  try {
    const email = req.body?.email;
    const dataToSend = await authService.getUsersDetailsByEmail(email);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "User Data Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find user data!",
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
exports.getMyDetails = async (req: any, res: any) => {
  try {
    const id = req.user.id;
    const dataToSend = await authService.getMyDetails(id);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "User Data Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find user data!",
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
exports.getMyActivity = async (req: any, res: any) => {
  try {
    const id = req.user.id;
    const dataToSend = await authService.getMyActivity(id);
    if (dataToSend != null) {
      res.json({
        status: 200,
        error: false,
        message: "User Activity Found!",
        data: dataToSend,
      });
    } else {
      res.json({
        status: 200,
        error: true,
        message: "Unable to find user activity!",
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

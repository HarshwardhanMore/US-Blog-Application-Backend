const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const JWT_SECRET = "us-harshwardhanmore";

async function hashIt(password: any) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed.toString();
}
async function compareIt(password: any, hashedPassword: any) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword ? true : false;
}

function generateJwtToken(user: any) {
  const id = user.id;
  const email = user.email;
  const firstname = user.firstname;
  const lastname = user.lastname;
  const expiresIn = "1h";
  const payload = {
    id: id,
    email: email,
    firstname: firstname,
    lastname: lastname,
    date: Date.now(),
  };
  const signedToken = jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: expiresIn,
  });
  return signedToken;
}

exports.login = async (data: any) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (existingUser) {
      const isPasswordSame = await compareIt(
        data?.password,
        existingUser?.password
      );
      if (isPasswordSame)
        return { ...existingUser, token: generateJwtToken(existingUser) };
      // Return the result of generateJwtToken
      else return null;
    }
    return null;
  } catch (error: any) {
    throw new Error("Error logging in: " + error.message); // Corrected error message
  }
};

exports.register = async (data: any) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return null;
    }

    const hashedPassword = await hashIt(data?.password);

    const user = await prisma.user.create({
      data: {
        email: data?.email,
        firstname: data?.firstname || "",
        lastname: data?.lastname || "",
        password: hashedPassword,
      },
    });

    return user;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getUserByEmail = async (email: any) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getAllUsersDetails = async () => {
  try {
    const usersDetails = await prisma.user.findMany({
      include: {
        blogs: {
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
        },
        likes: true,
        comments: true,
      },
    });
    return usersDetails;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getUsersDetailsById = async (id: any) => {
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        blogs: {
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
        },
        likes: true,
        comments: true,
      },
    });
    return userDetails;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getUsersDetailsByEmail = async (email: any) => {
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        blogs: {
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
        },
        likes: true,
        comments: true,
      },
    });
    return userDetails;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getMyDetails = async (id: any) => {
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        blogs: {
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
        },
        likes: {
          include: {
            blog: true,
            user: true,
          },
        },
        comments: {
          include: {
            blog: true,
            commentedByUser: true,
          },
        },
      },
    });
    return userDetails;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
exports.getMyActivity = async (id: any) => {
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        likes: true,
        comments: true,
      },
    });
    return userDetails;
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};

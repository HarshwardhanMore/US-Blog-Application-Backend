# Steps to start with

1) Clone Repository
2) Run command : npm i
3) Run command : npm run dev
4) This will host on localhost 3000 port

# Auth & User

**Login**
API Endpoint: /api/login
Method: POST
Body -->
email: User's email address.
password: User's password.

**Register**
API Endpoint: /api/register
Method: POST
Body -->
email: User's email address.
password: User's password.

**Get All Users**
API Endpoint: /api/getAllUsers
Method: GET

**Get All Users Details**
API Endpoint: /api/getAllUsersDetails
Method: GET

**Get Users Details By ID**
API Endpoint: /api/getUsersDetailsById
Method: POST
Body -->
id: User's ID.

**Get Users Details By Email**
API Endpoint: /api/getUsersDetailsByEmail
Method: POST
Body -->
email: User's email address.

**Get My Details**
API Endpoint: /api/getMyDetails
Method: GET

# Blog Endpoints

**Create Blog**
API Endpoint: /api/create
Method: POST
Body -->
title: Title of the blog.
content: Content of the blog.

**Delete Blog**
API Endpoint: /api/delete
Method: POST
Body -->
id: ID of the blog to delete.

**Like on Blog**
API Endpoint: /api/like
Method: POST
Body -->
blogid: ID of the blog to like.

**Comment on Blog**
API Endpoint: /api/comment
Method: POST
Body -->
blogid: ID of the blog to comment on.
comment: Comment text.

**Get All Blogs**
API Endpoint: /api/getAllBlogs
Method: GET

**Get All Blogs By User ID**
API Endpoint: /api/getAllBlogsByUserId
Method: POST
Body -->
id: User's ID.

**Get Blog Details By ID**
API Endpoint: /api/getBlogDetailsById
Method: POST
Body -->
blogid: ID of the blog.

**Get All Likes By Blog ID**
API Endpoint: /api/getAllLikesByBlogId
Method: POST
Body -->
blogid: ID of the blog.

**Get All Comments By Blog ID**
API Endpoint: /api/getAllCommentsByBlogId
Method: POST
Body -->
blogid: ID of the blog.

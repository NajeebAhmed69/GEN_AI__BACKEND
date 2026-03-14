const express = require('express');
const authRouter = express.Router();
 const { register, login,logout,getMe }  = require("../controllers/authController")
const {authUser} = require("../middlewares/authMiddleware")


/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", register)

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login", login)
/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */
authRouter.get("/logout", logout)
/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me",authUser,getMe)


module.exports = authRouter;

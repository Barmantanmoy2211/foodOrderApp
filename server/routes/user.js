import express from "express";
import passport, { Passport } from "passport";
import { getAdminUsers, logout, myProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}));

router.get(
    "/login",
passport.authenticate("google"),
(req,res,next)=>{
    res.send("Logged In");
});

router.get("/me",isAuthenticated,myProfile);

router.get("/logout",logout);

//Admin Routes
router.get("/admin/user",isAuthenticated,authorizeAdmin,getAdminUsers)


export default router;



//using error moddleware






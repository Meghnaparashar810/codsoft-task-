import express from "express"
import register, { Login } from "../controller/usercontroller.js"
import userAuth from "../middleware/Authmiddlewar.js"

const router = express.Router()
router.post("/register", register)
router.post("/login",  Login)


export default router ;
import express from "express"
import { deletecontoller, getjobcontroller, jobcontroller, jobStatscontroller, updatecompanycontroller } from "../controller/companycontroller.js"
import userAuth from "../middleware/Authmiddlewar.js";
const companyRoute = express.Router()

companyRoute.post("/company", userAuth, jobcontroller)
companyRoute.get("/getcompany", userAuth, getjobcontroller)
companyRoute.patch("/getcompany/:id", userAuth, updatecompanycontroller)
companyRoute.delete("/deletecompany/:id", userAuth, deletecontoller)
companyRoute.get("/Stats", userAuth, jobStatscontroller)





export default companyRoute;

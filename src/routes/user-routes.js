import { Router } from "express";
import { createUser, deleteUser, getAllUsers } from "../controllers/UserController.js";

const router = Router()

router.get("/users", getAllUsers)
router.post("/users/", createUser)
router.delete("/users/:id", deleteUser)

export default router
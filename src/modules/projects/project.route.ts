import express from "express";
import { ProjectControllers } from "./project.controller";
const router = express.Router();


router.post("/add-project", ProjectControllers.createProject);
router.get("/projects", ProjectControllers.getProjects);
router.get("/projects/:id", ProjectControllers.getSingleProject);
router.patch("/projects/:id", ProjectControllers.updateProject);
router.delete("/projects/:id", ProjectControllers.deleteProject);


export const ProjectRoutes = router;
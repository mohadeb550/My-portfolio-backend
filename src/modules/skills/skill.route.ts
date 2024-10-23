import express from "express";
import { SkillControllers } from "./skill.controller";
const router = express.Router();


router.post("/add-skill", SkillControllers.createSkill);
router.get("/skills", SkillControllers.getSkills);
router.get("/skills/:id", SkillControllers.getSingleSkill);
router.patch("/skills/:id", SkillControllers.updateSkill);
router.delete("/skills/:id", SkillControllers.deleteSkill);


export const SkillRoutes = router;
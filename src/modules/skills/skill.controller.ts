import { Request, Response } from "express";
import { SkillServices } from "./skill.service";
import catchAsync from "../../utils/catchAsync";


const createSkill = catchAsync(async (req: Request, res: Response) => {
  const skillData = req.body;
  const result = await SkillServices.createSkillIntoDB(skillData);

  res.json({
    success: true,
    message: "Skill is created successfully !",
    data: result,
  });
});


const getSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getSkillsFromDB();

  res.json({
    success: true,
    message: "Skills is fetched successfully !",
    data: result,
  });
});


const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const skillId = req.params.skillId;
  const result = await SkillServices.getSingleSkillFromDB(skillId);

  res.json({
    success: true,
    message: "Skill is fetched successfully !",
    data: result,
  });
});



const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const skillId = req.params.id;
  const payload = req.body;
  const result = await SkillServices.updateSkillIntoDB(skillId, payload);

  res.json({
    success: true,
    message: "Skills is updated successfully !",
    data: result,
  });
});


const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const skillId = req.params.id;
  const result = await SkillServices.deleteSkillFromDB(skillId);

  res.json({
    success: true,
    message: "Skills is deleted successfully !",
    data: result,
  });
});


export const SkillControllers = {
  createSkill,
   getSkills,
   updateSkill,
   deleteSkill,
   getSingleSkill,
};

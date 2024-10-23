import { Request, Response } from "express";
import { ProjectServices } from "./project.service";
import catchAsync from "../../utils/catchAsync";


const createProject = catchAsync(async (req: Request, res: Response) => {
  const projectData = req.body;
  const result = await ProjectServices.createProjectIntoDB(projectData);

  res.json({
    success: true,
    message: "Project is created successfully !",
    data: result,
  });
});


const getProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getProjectsFromDB();

  res.json({
    success: true,
    message: "Projects is fetched successfully !",
    data: result,
  });
});


const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.projectId;
  const result = await ProjectServices.getSingleProjectFromDB(projectId);

  res.json({
    success: true,
    message: "Project is fetched successfully !",
    data: result,
  });
});



const updateProject = catchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const payload = req.body;
  const result = await ProjectServices.updateProjectIntoDB(projectId, payload);

  res.json({
    success: true,
    message: "Projects is updated successfully !",
    data: result,
  });
});


const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const result = await ProjectServices.deleteProjectFromDB(projectId);

  res.json({
    success: true,
    message: "Projects is deleted successfully !",
    data: result,
  });
});


export const ProjectControllers = {
  createProject,
   getProjects,
   updateProject,
   deleteProject,
   getSingleProject,
};

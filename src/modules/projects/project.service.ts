
import { TProject} from "./project.interface";
import { Project } from "./project.model";


const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getProjectsFromDB = async () => {
  const projects = await Project.find()
  return projects;
};

const getSingleProjectFromDB = async (projectId: string) => {
  const result = await Project.findById(projectId)
  return result;
};

const updateProjectIntoDB = async (projectId: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(projectId, payload, {new : true})
  return result;
};

const deleteProjectFromDB = async (projectId: string) => {
  const result = await Project.findByIdAndDelete(projectId)
  return result;
};


export const ProjectServices = {
  createProjectIntoDB,
  getProjectsFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
  getSingleProjectFromDB,
};



import { TSkill} from "./skill.interface";
import { Skill } from "./skill.model";


const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getSkillsFromDB = async () => {
  const skills = await Skill.find()
  return skills;
};

const getSingleSkillFromDB = async (skillId: string) => {
  const result = await Skill.findById(skillId)
  return result;
};

const updateSkillIntoDB = async (skillId: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(skillId, payload, {new : true})
  return result;
};

const deleteSkillFromDB = async (skillId: string) => {
  console.log(skillId)
  const result = await Skill.findByIdAndDelete(skillId)
  return result;
};


export const SkillServices = {
  createSkillIntoDB,
  getSkillsFromDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
  getSingleSkillFromDB,
};


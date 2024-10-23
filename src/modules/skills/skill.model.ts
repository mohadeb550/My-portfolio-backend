
import { Schema, model } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>({
  name : {
    type : String,
    required : true,
  },
  logo : {
    type : String,
    required : true,
  },
  transition : {
    type : String,
    required : true,
  }
}, {
  timestamps : true
});

export const Skill = model<TSkill>("Skill", skillSchema);

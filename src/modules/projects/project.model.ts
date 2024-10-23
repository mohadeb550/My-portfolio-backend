
import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>({
  image : {
    type : String,
    required : true,
  },
  title : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  server_code : {
    type : String,
    required : true,
  },
  client_code : {
    type : String,
    required : true,
  },
  live : {
    type : String,
    required : true,
  },
  technologies : {
    type : String,
    required : true,
  },

}, {
  timestamps : true
});

export const Project = model<TProject>("Project", projectSchema);

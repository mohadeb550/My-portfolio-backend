import express, { Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorhandler";
import { AuthRoutes } from "./modules/auth/auth.route";
import { ProjectRoutes } from "./modules/projects/project.route";
import { SkillRoutes } from "./modules/skills/skill.route";
import { BlogRoutes } from "./modules/blogs/blog.route";

const app = express();

//parsers
app.use(cors({ origin : 'https://mohadeb-bhowmik.web.app'}));
app.use(express.json());

// routes 
app.use(AuthRoutes);
app.use(ProjectRoutes);
app.use(SkillRoutes);
app.use(BlogRoutes);
app.use(globalErrorHandler);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next");
});

app.all('*',(req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
})

export default app;

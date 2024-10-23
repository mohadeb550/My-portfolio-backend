
import { authServices } from "./auth.services";
import catchAsync from "../../utils/catchAsync";


const loginUser = catchAsync (async (req, res) => {
   const result = await authServices.loginUser(req.body);

  res.json({
    success : true,
    statusCode : 200,
    message : 'Admin logged in successfully',
    data: result,
  })
})


export const authControllers = {
    loginUser
}
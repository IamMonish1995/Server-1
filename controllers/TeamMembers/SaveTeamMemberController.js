// const teamMemberModel = require("../../Schema/teamMemberSchema");
// const moveFileFunction= require("../comman/secure");

// exports.teamMemberController = async (req, res) => {
//   try {
           
//   const { Name, role,description} = req.body;
//   // console.log(req.body);
//   console.log({Name,role,description});
//     const filter = {
//        Name: Name,
//        Designation: role,
//        Description: description  
//     }
  
//     const existingMaster = await teamMemberModel.findOne(filter);
  
//     if (existingMaster) {
//         throw new BadRequestError('Name already exist');
//     }
  
//     if (req.files) {
//         if (req.files.image) {
//           console.log(req.files.image);
//             req.body.Image = await moveFileFunction(req.files.image, `/`);
//         } }
  
//     const team = teamMemberModel.build({ Name: Name,Designation: role,Description: description ,Image: `${req.body.Image.split('/')[1]}`});
    
//     await team.save();
  
//     return res.status(200).json({
//         status: "Success",
//         message: "Team Added Successfully",
//     });
  
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//         status: "SERVER_ERROR",
//         message: error,
//     });
//   }
// };





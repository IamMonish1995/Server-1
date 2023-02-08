const teamMemberModel = require("../../Schema/teamMemberSchema");

exports.UpdateTeamMemberController = async (req, res) => {
  try {
    const { ID, Name, Designation, Description, Image } = req.body;
    const UPDATED_DATA = {
      Name,
      Designation,
      Description,
      Image,
    };
    teamMemberModel.updateOne(
      { _id: ID },
      UPDATED_DATA,
      function (err, TeamMember) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (TeamMember) {
          res.status(200).json({
            status: "SUCCESS",
            data: TeamMember,
          });
        }
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: "Something went wrong",
      result: error,
    });
  }
};

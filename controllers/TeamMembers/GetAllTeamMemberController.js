const teamMemberModel = require("../../Schema/teamMemberSchema");

exports.getAllTeamMemberController = async (req, res) => {
  try {
    
    teamMemberModel.find(function (err, TeamMembers) {
      if (err) {
        res.status(400).json({
          status: "FAILED",
          message: "Something went wrong",
          result: err,
        });
      }
      if (TeamMembers) {
        res.status(200).json({
          status: "SUCCESS",
          data: TeamMembers,
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: "Something went wrong",
      result: error,
    });
  }
};

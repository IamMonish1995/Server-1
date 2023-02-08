const teamMemberModel = require("../../Schema/teamMemberSchema");

exports.DeleteTeamMemberController = async (req, res) => {
  try {
    const { ID } = req.body;

    teamMemberModel.findOneAndRemove(
      { _id: ID },
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

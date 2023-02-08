const pageHedingModel = require("../../Schema/pageHeadingSchema");

exports.deletePageHeadingController = async (req, res) => {
  try {
    const { ID } = req.body;

    pageHedingModel.findOneAndRemove(
      { _id: ID },
      function (err, PageHeading) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (PageHeading) {
          res.status(200).json({
            status: "SUCCESS",
            data: PageHeading,
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

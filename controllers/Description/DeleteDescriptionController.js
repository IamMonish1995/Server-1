const descriptionModel = require("../../Schema/descriptionSchema");

exports.DeleteDescriptionController = async (req, res) => {
  try {
    const { ID } = req.body;

    descriptionModel.findOneAndRemove(
      { _id: ID },
      function (err, PageDescription) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (PageDescription) {
          res.status(200).json({
            status: "SUCCESS",
            data: PageDescription,
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

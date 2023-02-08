const iconsModel = require("../../Schema/iconsSchema");

exports.DeleteIconsController = async (req, res) => {
  try {
    const { ID } = req.body;

    iconsModel.findOneAndRemove(
      { _id: ID },
      function (err, PageIcon) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (PageIcon) {
          res.status(200).json({
            status: "SUCCESS",
            data: PageIcon,
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

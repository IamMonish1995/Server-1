const iconsModel = require("../../Schema/iconsSchema");

exports.UpdateIconsController = async (req, res) => {
  try {
    const { ID, IconName } = req.body;
    const UPDATED_DATA = {
        IconName
    };
    iconsModel.updateOne(
      { _id: ID },
      UPDATED_DATA,
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

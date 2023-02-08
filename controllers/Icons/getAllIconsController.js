const iconsModel = require("../../Schema/iconsSchema");

exports.getAllIconsController = async (req, res) => {
  try {
    
    iconsModel.find(function (err, PageIcon) {
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
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: "Something went wrong",
      result: error,
    });
  }
};

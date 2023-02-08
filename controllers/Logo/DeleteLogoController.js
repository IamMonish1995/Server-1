const logoModel = require("../../Schema/logoSchema");

exports.DeleteLogoController = async (req, res) => {
  try {
    const { ID } = req.body;

    logoModel.findOneAndRemove(
      { _id: ID },
      function (err, PageLogo) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (PageLogo) {
          res.status(200).json({
            status: "SUCCESS",
            data: PageLogo,
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

const logoModel = require("../../Schema/logoSchema");

exports.UpdateLogoController = async (req, res) => {
  try {
    const { ID, LogoName } = req.body;
    const UPDATED_DATA = {
        LogoName
    };
    logoModel.updateOne(
      { _id: ID },
      UPDATED_DATA,
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

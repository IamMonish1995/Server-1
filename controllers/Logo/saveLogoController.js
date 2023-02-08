const logoModel = require("../../Schema/logoSchema");

exports.saveLogoController = async (req, res) => {
  try {
    let newLogo = new logoModel({
      LogoName: req.body.LogoName
    });
    newLogo.save(function (err, PageLogo) {
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
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: "Something went wrong",
      result: error,
    });
  }
};

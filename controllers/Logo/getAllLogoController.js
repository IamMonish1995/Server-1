const logoModel = require("../../Schema/logoSchema");

exports.getAllLogoController = async (req, res) => {
  try {
    
    logoModel.find(function (err, PageLogo) {
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

// exports.getAllLogoController = async (req, res) => {
//   try {
//         res.status(200).json({
//           status: "qwetryu",
//           message: "Something went wrong"
//         });
      
     
//   } catch (error) {
//     res.status(400).json({
//       status: "FAILED",
//       message: "Something went wrong",
//       result: error,
//     });
//   }
// };
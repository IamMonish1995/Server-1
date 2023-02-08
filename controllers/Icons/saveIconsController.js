const iconsModel = require("../../Schema/iconsSchema");

exports.saveIconsController = async (req, res) => {
  try {
    let newIconName = new iconsModel({
      IconName: req.body.IconName
    });
    newIconName.save(function (err, PageIcon) {
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

// const descriptionModel = require("../../Schema/descriptionSchema");

// exports.getImage = async (req, res) => {
//   try {
    
//     descriptionModel.find(function (err, PageDescription) {
//       if (err) {
//         res.status(400).json({
//           status: "FAILED",
//           message: "Something went wrong",
//           result: err,
//         });
//       }
//       if (PageDescription) {
//         res.status(200).json({
//           status: "SUCCESS",
//           data: PageDescription,
//         });
//       }
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "FAILED",
//       message: "Something went wrong",
//       result: error,
//     });
//   }
// };
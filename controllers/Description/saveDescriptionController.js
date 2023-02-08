const descriptionModel = require("../../Schema/descriptionSchema");

exports.saveDescriptionController = async (req, res) => {
  try {
    let newDescription = new descriptionModel({
      Icon: req.body.Icon,
      Title: req.body.Title,
      Description: req.body.Description 
    });
    newDescription.save(function (err, PageDescription) {
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
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: "Something went wrong",
      result: error,
    });
  }
};

const descriptionModel = require("../../Schema/descriptionSchema");

exports.UpdateDescriptionController = async (req, res) => {
  try {
    const { ID, Icon, Title, Description } = req.body;
    const UPDATED_DATA = {
        Icon, 
        Title,
         Description
    };
    descriptionModel.updateOne(
      { _id: ID },
      UPDATED_DATA,
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

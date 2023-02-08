const pageHedingModel = require("../../Schema/pageHeadingSchema");

exports.updatePageHeadingController = async (req, res) => {
  try {
    const { ID, Heading, Subheading ,Page} = req.body;
    const UPDATED_DATA = {
        Heading, 
        Subheading,
        Page
    };
    pageHedingModel.updateOne(
      { _id: ID },
      UPDATED_DATA,
      function (err, PageHeading) {
        if (err) {
          res.status(400).json({
            status: "FAILED",
            message: "Something went wrong",
            result: err,
          });
        }
        if (PageHeading) {
          res.status(200).json({
            status: "SUCCESS",
            data: PageHeading,
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

const usersModel = require("../../Schema/userSchema");

exports.registerUser = async (req, res) => {
  const { userName, password } = req.body;
  const user = await usersModel.findOne({ userName: userName });
  if (user) {
    res.send({ status: "failed", message: "UserName already exists" });
  } else {
    if (userName && password) {
      try {
        const doc = new usersModel({
            userName,
          password
          
        });
        await doc.save();
        const saved_user = await usersModel.findOne({ userName: userName });
        const token = jwt.sign(
          {
            userName: saved_user.userName
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "5d" }
        );
        res
          .status(201)
          .send({
            status: "success",
            message: "Registration Success",
            token: token,
          });
      } catch (error) {
        console.log(error);
        res.send({ status: "failed", message: "Unable to Register" });
      }
    } else {
      res.send({ status: "failed", message: "UserName and password both are required" });
    }
  }
};

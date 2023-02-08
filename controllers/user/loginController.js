const usersModel = require("../../Schema/userSchema");

exports.loginUser = async (req, res) => {
  const { userName, password } = req.body;
  const user = await usersModel.findOne({
    userName: userName,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userName: saved_user.userName,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    res.send({ status: "success", message: "Login Successfull", token: token });
  } else {
    res.send({ status: "failed", message: "User Not Found" });
  }
};

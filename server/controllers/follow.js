const Follow = require("../models/follow");
const User = require("../models/user");

async function follow(username, ctx) {
  const userFound = await User.findOne({ username });
  if (!userFound) throw new Error("Usuario no encontrado");

  try {
    const follow = new Follow({
      idUser: ctx.user.id,
      follow: userFound._id,
    });
    follow.save();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  follow,
};

<<<<<<< HEAD
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const awsUpload = require("../utils/aws-upload");
=======
const User = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const awsUpload = require("../utils/aws.upload");


require("dotenv").config({ path: __dirname + '/../../.env' });
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6

require("dotenv").config({ path: __dirname + "/../../.env" });

function createToken(user, SECRET_KEY, expiresIn) {
  const { id, name, email, username } = user;
  const payload = {
    id,
    name,
    email,
    username,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

async function register(input) {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();
  const { email, username, password } = newUser;
  const foundEmail = await User.findOne({ email });
  if (foundEmail) throw new Error("email ya en uso");
  const foundUsername = await User.findOne({ username });
  if (foundUsername) throw new Error("usuario ya en uso");

  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try {
    const user = new User(newUser);
    user.save();
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
}

<<<<<<< HEAD
// function getUser(){
//     console.log("obteniendo usuairo");
//     return null
// }
=======
async function updateAvatar(file, ctx) {
    const { id } = ctx.user;
    const { createReadStream, mimetype } = await file;
    const extension = mimetype.split("/")[1];
    const imageName = `avatar/${id}.${extension}`;
    const fileData = createReadStream();

    try {
        const result = await awsUpload(fileData, imageName);
        await User.findByIdAndUpdate(id, { avatar: result });
        return {
            status: true,
            urlAvatar: result,
        };
    } catch (error) {
        return {
            status: false,
            urlAvatar: null,
        };
    }
}

async function deleteAvatar(ctx) {
    const { id } = ctx.user;
    try {
        await User.findByIdAndUpdate(id, { avatar: "" });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function updateUser(input, ctx) {
    const { id } = ctx.user;

    try {
        if (input.currentPassword && input.newPassword) {
            const userFound = await User.findById(id);
            const passwordSuccess = await bcryptjs.compare(
                input.currentPassword,
                userFound.password
            );

            if (!passwordSuccess) throw new Error("Incorrect Password");

            const salt = await bcryptjs.genSaltSync(10);
            const newPasswordCrypt = await bcryptjs.hash(input.newPassword, salt);

            await User.findByIdAndUpdate(id, { password: newPasswordCrypt });
        } else {
            await User.findByIdAndUpdate(id, input);
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function search(search) {
    const users = await User.find({
        name: { $regex: search, $options: "i" },
    });

    return users;
}
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6

async function login(input) {
  const { email, password } = input;

  const userFound = await User.findOne({ email: email.toLowerCase() });
  if (!userFound) throw new Error("Error en el email o contraseña 1");
  const passwordSuccuess = await bcryptjs.compare(password, userFound.password);
  if (!passwordSuccuess) throw new Error("Error en el email o contraseña 2");
  // console.log(userFound);

  console.log(createToken(userFound, process.env.SECRET_KEY, "24h"));
}

async function updateAvatar(file, ctx) {
  const { id } = ctx.user;
  const { createReadStream, mimetype } = await file;
  const extension = mimetype.split("/")[1];
  //avatar = s3 folder - avtr nombre and extension to add jpeg / jpg etc...
  // id = This id will be used to upload images to S3 with the name avatar+id of each user + extension.
  const imagePath = `avatar/${id}.${extension}`;
  const fileData = createReadStream();
  try {
    const result = await awsUpload(fileData, imagePath);
    // returns the image by an url, to use it as a profile photo.
    return {
      status: true,
      urlAvatar: result,
    };
  } catch (error) {
    return {
      status: false,
      urlAvatar: null,
    };
  }
}

module.exports = {
<<<<<<< HEAD
  register,
  // getUser,
  login,
  updateAvatar,
};
=======
    register,
    getUser,
    login,
    updateAvatar,
    deleteAvatar,
    updateUser,
    search
}
>>>>>>> 6e0f123774213bcff1d53afc2f2cf644b80776b6

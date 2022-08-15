const User = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


require("dotenv").config({ path: __dirname + '/../../.env' });


function createToken(user, SECRET_KEY, expiresIn) {
    const { id, name, email, username } = user
    const payload = {
        id,
        name,
        email,
        username
    }
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

async function register(input) {
    const newUser = input
    newUser.email = newUser.email.toLowerCase()
    newUser.username = newUser.username.toLowerCase()
    const { email, username, password } = newUser
    const foundEmail = await User.findOne({ email })
    if (foundEmail) throw new Error("Email already used!")
    const foundUsername = await User.findOne({ username })
    if (foundUsername) throw new Error("User already exists!")


    const salt = await bcryptjs.genSaltSync(10)
    newUser.password = await bcryptjs.hash(password, salt)

    try {
        const user = new User(newUser)
        user.save()
        console.log(user)
        return user
    } catch (error) {
        console.log(error);
    }
}

async function getUser(id, username) {
    let user = null;
    if (id) user = await User.findById(id);
    if (username) user = await User.findOne({ username });
    if (!user) throw new Error("User doesn't exist");
    return user;
}

async function login(input) {

    const { email, password } = input

    console.log(email);
    const userFound = await User.findOne({ email: email.toLowerCase() })
    if (!userFound) throw new Error("Email or Password error!")
    const passwordSuccuess = await bcryptjs.compare(password, userFound.password)
    if (!passwordSuccuess) throw new Error("Email or Password Error!")
    console.log(createToken(userFound, process.env.SECRET_KEY, "24h"));
    const token = createToken(userFound, process.env.SECRET_KEY, "400h")
    return { token }
}

module.exports = {
    register,
    getUser,
    login,
}
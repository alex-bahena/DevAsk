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
    if (foundEmail) throw new Error("email ya en uso")
    const foundUsername = await User.findOne({ username })
    if (foundUsername) throw new Error("usuario ya en uso")


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

// function getUser(){
//     console.log("obteniendo usuairo");
//     return null
// }

async function login(input) {

    const { email, password } = input

    const userFound = await User.findOne({ email: email.toLowerCase() })
    if (!userFound) throw new Error("Error en el email o contraseña 1")
    const passwordSuccuess = await bcryptjs.compare(password, userFound.password)
    if (!passwordSuccuess) throw new Error("Error en el email o contraseña 2")
    // console.log(userFound);
    console.log(createToken(userFound, process.env.SECRET_KEY, "24h"));
}

module.exports = {
    register,
    // getUser,
    login
}
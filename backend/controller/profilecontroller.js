import User from "../models/usermodel.js"

export const userprofile = async (req, res, next) => {
    try {

        const { fullname, email, password, location } = req.body
        if (!fullname || !email || !password || !location) {
            return res.status(400).json({
                message: "please provide all fields",
                success: false
            })
        }

        const user = await User.findOne({ _id: req.user.userId })
        user.fullname = fullname
        user.email = email
        user.password = password
        user.location = location

        await user.save();
        const token = user.createJWT();
        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        console.log(error.message)
    }

}
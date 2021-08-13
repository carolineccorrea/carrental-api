import User from "../model/User";
const bcrypt = require('bcrypt');

class UserController {
    async store(req, res) {
        try {
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(req.body.password, salt)

            const newUser = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash
            }
            new User.save(newUser)
            if (newUser) {
                console.log("ok")
            }

        } catch (err) {
            console.log(err)
        }

    }

}

export default new UserController();
import Contact from "../model/Contact";

class ContactController {
Contac
    async store(req, res) {
        const { email, name, message } = req.body;
        const newUser = {
            name: req.user._id,
            message: req.body.message
        }
        let cont = await Contact.create(newUser)
        return res.json(cont)

    }

}

export default new ContactController();
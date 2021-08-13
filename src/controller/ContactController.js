import Contact from "../model/Contact";

class ContactController {
    async store(req, res) {
        const { email, name, message } = req.body;
        const newContact = {
            name: req.user._id,
            message: req.body.message
        }
        let cont = await Contact.create(newContact)
        return res.json(cont)

    }

}

export default new ContactController();
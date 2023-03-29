import user from "../model/user.js"


const addUserController = (req, res) => {

    const createUser = new user ({
        name:req.body.name,
        age:req.body.age
    })

    const saveUser = createUser.save();

    res.status(201).json(saveUser)

}

export {addUserController}
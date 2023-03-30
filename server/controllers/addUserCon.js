import user from "../model/user.js"


const addUserController = async (req, res) => {


    const createUser = new user ({
        name:req.body.name,
        age:req.body.age
    })

    const saveUser = await createUser.save();

    res.status(201).json(saveUser)

}

export {addUserController}
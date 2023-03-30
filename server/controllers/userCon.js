import User from '../model/user.js'

const userController = async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error, 'unable to get users from db');
        res.status(500).json({message: 'unable to get users'});
    }
}




export {userController};
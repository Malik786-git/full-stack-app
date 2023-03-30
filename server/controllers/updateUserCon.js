import user from "../model/user.js";

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await user.findById(id);
    if (!updatedUser) {
      res.status(500).json({ message: "unable to find user" });
    } else {
      console.log(req.body);
      updatedUser.name = req.body.name || updatedUser.name;
      updatedUser.age = req.body.age || updatedUser.age;
      
        const updatedUserData = await updatedUser.save();
        res.status(201).json(updatedUserData);

    }
  } catch (error) {
    res.status(500).json({ message: "unable to update user" });
  }
};

export { updateUserController };

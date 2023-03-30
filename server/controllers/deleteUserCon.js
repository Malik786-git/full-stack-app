import user from "../model/user.js";

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await user.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ message: "user not found" });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(404).json({ message: "unable to delete user" });
  }
};

export { deleteUserController };

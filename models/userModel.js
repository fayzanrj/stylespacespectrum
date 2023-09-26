const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: "String",
    required: true,
    unique : true
  },
  name: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  picture: {
    type: "string",
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},{timestamps : true});

const User = models.User || model("User", UserSchema);

export default User

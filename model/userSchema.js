const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  highScore: {
    type: Number,
  },
  highestLevel: {
    type: Number,
  },
  lastLogin: [
    {
      loginTime: {
        type: Date
      },
      lastScore: {
        type: Number
      }, 
      lastRank: {
        type: Number
      },
      lastLevel: {
        type: Number
      }
    },
  ],
  highestRank: {
    type: Number
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    // this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

//generating user token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.generateLogin = async function () {
  try {
    let loginTime = new Date(Date.now())
    this.loginTime = this.loginTime.concat({ loginTime: loginTime });
    await this.save()
  } catch (error) {
    console.log(error);
  }
}

//get resetpassword token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};
// collection creation
const User = mongoose.model("USER", userSchema);

module.exports = User;

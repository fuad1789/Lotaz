const Auth = require("../models/auth.js");
const bcryp = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios");

// Nodemailer ayarları
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "fuadbagiyev@gmail.com",
    pass: "ozvdwplbgdmnocfu",
  },
});

const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      userEnteredCode,
      hashedVerificationCode,
    } = req.body;

    const user = await Auth.findOne({ email });
    const isCodeValid = await bcryp.compare(
      userEnteredCode.toString(),
      hashedVerificationCode
    );

    if (user) {
      return res
        .status(500)
        .json({ message: "Bu email adresi daha öncədən istifadə olunub" });
    }
    if (!isCodeValid) {
      return res.status(500).json({ message: "Yazdığınız kod yanlışdır" });
    }

    const passwordHash = await bcryp.hash(password, 12);

    const newUser = await Auth.create({
      username,
      email,
      password: passwordHash,
    });

    const userToken = jwt.sign({ id: newUser._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      userToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const OTPverification = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Auth.findOne({ email });
    let isValidEmail = false;

    const url = `https://client.bulkemailverifier.com/api/singlemaildetails?secret=${process.env.VERIFIER_API_KEY}&email=${email}`;

    await axios(url)
      .then((r) => {
        isValidEmail = r.data.result == "valid";
      })
      .catch((err) => console.log(err));

    if (user) {
      return res
        .status(500)
        .json({ message: "Bu email adresi daha öncədən istifadə olunub" });
    }

    if (!isValidEmail) {
      return res.status(500).json({ message: "Belə bir email adresi yoxdur!" });
    }

    const randomVerificationCode = Math.floor(
      100000 + Math.random() * 900000,
      12
    );
    const randomVerificationCodeHash = await bcryp.hash(
      randomVerificationCode.toString(),
      12
    );

    const mailOptions = {
      from: "fuadbagiyev@gmail.com",
      to: email,
      subject: "Hesap Doğrulama Kodu",
      text: `Hesabınızı doğrulamak için şu kodu kullanın: ${randomVerificationCode}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("E-posta gönderme hatası:", error);
      } else {
        res.status(200).json({ otpCode: randomVerificationCodeHash });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LOG IN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }

    const comparedPassword = await bcryp.compare(password, user.password);
    if (!comparedPassword) {
      return res.status(500).json({ message: "Şifrə yanlışdır" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// FORGET PASSWORD
const foregtPasswordOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }

    const randomVerificationCode = Math.floor(
      100000 + Math.random() * 900000,
      12
    );
    const randomVerificationCodeHash = await bcryp.hash(
      randomVerificationCode.toString(),
      12
    );

    const mailOptions = {
      from: "fuadbagiyev@gmail.com",
      to: email,
      subject: "Hesap Doğrulama Kodu",
      text: `Hesabınızı doğrulamak için şu kodu kullanın: ${randomVerificationCode}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        res.status(200).json({ otpCode: randomVerificationCodeHash });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }

    const passwordHash = await bcryp.hash(newPassword, 12);

    user.password = passwordHash;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Auth.findById(id);

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  OTPverification,
  login,
  foregtPasswordOTP,
  resetPassword,
  getOneUser,
};

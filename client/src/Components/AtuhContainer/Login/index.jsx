import React, { useEffect, useState } from "react";
import TxtInput from "../TxtInput";
import PassInput from "../PassInput";
import SubBtn from "../SubBtn";
import SendCodeAgain from "../SendCodeAgain";
import style from "../style.module.css";
import { IoMailOutline } from "react-icons/io5";
import { validateEmail, validatePassword } from "../../../utils/regexs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import bcrypt from "bcryptjs";
import {
  convertToMinutesAndSeconds,
  displayElapsedTime,
} from "../../../utils/auth";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrLoading, setIsErrLoading] = useState(false);

  const [forgetEmail, setForgetEmail] = useState("");
  const [forgetOtp, setForgetOtp] = useState("");
  const [isForgetLoading, setIsForgetLoading] = useState(false);
  const [ForgetOtpSection, setForgetOtpSection] = useState(
    localStorage.getItem("forgetOtpSection")
  );
  const [forgetCreateAt, setForgetCreateAt] = useState(
    localStorage.getItem("forgetCreateAt")
  );
  const [forgetOTPSec, setForgetOTPSec] = useState(
    localStorage.getItem("forgetOTPSec")
  );
  const [notVerifiedTime, setNotVerifiedTime] = useState(null);
  const [notVerifiedTimeTxt, setNotVerifiedTimeTxt] = useState(null);

  const [newPassSec, setNewPassSec] = useState(
    localStorage.getItem("newPassSec")
  );
  const [newPass, setNewPass] = useState("");
  const [newPassLoading, setNewPassLoading] = useState(false);

  const [OTPLoading, setOTPLoading] = useState(false);

  useEffect(() => {
    if (forgetCreateAt) {
      const startTime = new Date(forgetCreateAt);

      const interval = setInterval(() => {
        const elapsedTime = displayElapsedTime(startTime, 240);
        const minAndSec = convertToMinutesAndSeconds(elapsedTime);
        setNotVerifiedTime(elapsedTime);
        setNotVerifiedTimeTxt(`${minAndSec.minutes} : ${minAndSec.seconds}`);

        if (elapsedTime <= 0) {
          clearInterval(interval);
          setNotVerifiedTime(0);
          setNotVerifiedTimeTxt(`00 : 00`);
          localStorage.removeItem("createAt");
        }
      }, 1000);
    }
  }, [forgetCreateAt]);

  const login = async () => {
    const emailReg = validateEmail(email);
    const passReg = validatePassword(password);
    setIsErrLoading(true);

    if (!emailReg) {
      toast("Email forması yanlışdır", {
        theme: "dark",
        style: {
          fontSize: "0.8em",
        },
      });
      setIsErrLoading(false);
      return;
    } else if (!passReg) {
      toast("Şifrə 6 simvoldan çox olmalıdır!", {
        theme: "dark",
        style: {
          fontSize: "0.8em",
        },
      });
      setIsErrLoading(false);
      return;
    }

    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("userToken", res.data.token);
        window.location.reload();
      })
      .catch(async (err) => {
        setIsErrLoading(false);
        toast(err.response.data.message, {
          theme: "dark",
          style: {
            fontSize: "0.8em",
          },
        });
      });
  };

  const forgetPasHandle = async () => {
    try {
      setIsForgetLoading(true);
      const emailReg = validateEmail(forgetEmail);

      if (!emailReg) {
        toast("Email forması yanlışdır", {
          theme: "dark",
          style: {
            fontSize: "0.8em",
          },
        });
        setIsForgetLoading(false);
        return;
      }

      await axios
        .post("http://localhost:5000/foregtPasswordOTP", {
          email: forgetEmail || localStorage.getItem("forgetEmail"),
        })
        .then((res) => {
          const databaseDate = new Date();
          setForgetCreateAt(databaseDate);
          setForgetOTPSec(true);
          localStorage.setItem("OTPcode", res.data.otpCode);
          localStorage.setItem("forgetEmail", forgetEmail);
          localStorage.setItem("forgetOTPSec", true);
          localStorage.setItem("forgetCreateAt", databaseDate);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const OTPHandle = async () => {
    setOTPLoading(true);
    const OTPCode = localStorage.getItem("OTPcode");
    const isSame = await bcrypt.compare(forgetOtp, OTPCode);

    if (isSame) {
      setNewPassSec(true);
      localStorage.setItem("newPassSec", true);
      setOTPLoading(false);
    } else {
      setOTPLoading(false);
      toast("Yazdığınız doğrulama kodu yanlışdır", {
        theme: "dark",
        style: {
          fontSize: "0.8em",
        },
      });
    }
  };

  const openPassHandle = () => {
    setForgetOtpSection(true);
    localStorage.setItem("ForgetOtpSection", true);
  };

  const createNewPass = async () => {
    try {
      setNewPassLoading(true);
      const passReg = validatePassword(newPass);

      if (!passReg) {
        toast("Şifrə 6 simvoldan çox olmalıdır!", {
          theme: "dark",
          style: {
            fontSize: "0.8em",
          },
        });
        setNewPassLoading(false);
        return;
      }

      await axios
        .post("http://localhost:5000/resetPassword", {
          email: forgetEmail || localStorage.getItem("forgetEmail"),
          newPassword: newPass,
        })
        .then((res) => {
          setNewPassLoading(false);
          localStorage.clear();
          localStorage.setItem("userToken", res.data.token);
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          toast(err.data.message, {
            theme: "dark",
            style: {
              fontSize: "0.8em",
            },
          });
          setNewPassLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {ForgetOtpSection && !forgetOTPSec && !newPassSec && (
        <div className={style.auth}>
          <TxtInput
            Icon={IoMailOutline}
            placeholder={"E-Mail"}
            set={setForgetEmail}
          />
          <SubBtn
            isErrLoading={isForgetLoading}
            txt={"Daxil Ol"}
            disabled={!forgetEmail}
            click={forgetPasHandle}
          />
        </div>
      )}
      {forgetOTPSec && !newPassSec && (
        <div className={style.auth}>
          <TxtInput
            Icon={IoMailOutline}
            placeholder={"Doğrulama kodunu yazın"}
            set={setForgetOtp}
            value={forgetOtp}
          />
          <SendCodeAgain
            OTPHandle={forgetPasHandle}
            notVerifiedTime={notVerifiedTime}
            notVerifiedTimeTxt={notVerifiedTimeTxt}
          />
          <SubBtn
            isErrLoading={OTPLoading}
            txt={"Hesabı doğrula"}
            disabled={!forgetOtp}
            click={OTPHandle}
          />
        </div>
      )}
      {newPassSec && (
        <div className={style.auth}>
          <PassInput placeholder={"Yeni şifrə yarat"} set={setNewPass} />
          <SubBtn
            isErrLoading={newPassLoading}
            txt={"Yeni şifə yarat"}
            disabled={!newPass}
            click={createNewPass}
          />
        </div>
      )}

      {!ForgetOtpSection && !forgetOTPSec && !newPassSec && (
        <div className={style.auth}>
          <TxtInput
            Icon={IoMailOutline}
            placeholder={"E-Mail"}
            set={setEmail}
          />
          <PassInput placeholder={"Şifrə"} set={setPassword} />
          <SubBtn
            isErrLoading={isErrLoading}
            txt={"Daxil Ol"}
            disabled={!email || !password}
            click={login}
          />
          <button className={style.forgetPas} onClick={() => openPassHandle()}>
            Şifrəni unutmusan? <span>bura daxil ol</span>
          </button>
        </div>
      )}
    </>
  );
}

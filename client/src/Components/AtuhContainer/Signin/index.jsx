import React, { useEffect, useState } from "react";
import style from "../style.module.css";
import TxtInput from "../TxtInput";
import PassInput from "../PassInput";
import SubBtn from "../SubBtn";
import SendCodeAgain from "../SendCodeAgain";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { validateEmail, validatePassword } from "../../../utils/regexs";
import {
  convertToMinutesAndSeconds,
  displayElapsedTime,
} from "../../../utils/auth";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Index() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [OTPCode, setOTPCode] = useState("");

  const [notVerifiedTime, setNotVerifiedTime] = useState("");
  const [notVerifiedTimeTxt, setNotVerifiedTimeTxt] = useState("");

  const [createAt, setCreateAt] = useState(localStorage.getItem("createAt"));
  const [registerOTPSection, setRegisterOTPSection] = useState(
    JSON.parse(localStorage.getItem("OTPSection"))
  );

  const [isOTPBtnLoading, setIsOTPBtnLoading] = useState(false);
  const [isRegLoading, setIsRegLoading] = useState(false);

  useEffect(() => {
    if (createAt) {
      const startTime = new Date(createAt);

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
  }, [createAt]);

  const OTPHandle = async () => {
    try {
      setIsRegLoading(true);

      const emailReg = validateEmail(email);
      const passReg = validatePassword(password);

      if (!emailReg) {
        toast.error("Email forması yanlışdır");

        setIsRegLoading(false);
        return;
      } else if (!passReg) {
        toast.error("Şifrə 6 simvoldan çox olmalıdır!");
        setIsRegLoading(false);
        return;
      }

      await axios
        .post("http://localhost:5000/auth/OTPverification", {
          email: email || localStorage.getItem("email"),
        })
        .then((res) => {
          const databaseDate = new Date();
          localStorage.setItem("OTPCode", res.data.otpCode);
          localStorage.setItem("OTPSection", true);
          localStorage.setItem("email", email);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("createAt", databaseDate);

          setCreateAt(databaseDate);
          setRegisterOTPSection(true);

          setIsRegLoading(false);
        })
        .catch(async (err) => {
          toast.error(err.response.data.message);
          setIsRegLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async () => {
    try {
      setIsOTPBtnLoading(true);
      await axios
        .post("http://localhost:5000/auth/register", {
          username: username || localStorage.getItem("username"),
          email: email || localStorage.getItem("email"),
          password: password || localStorage.getItem("password"),
          userEnteredCode: OTPCode,
          hashedVerificationCode: localStorage.getItem("OTPCode"),
        })
        .then((res) => {
          console.log(res);
          localStorage.clear();
          localStorage.setItem("userToken", res.data.userToken);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setIsOTPBtnLoading(false);
    }
  };

  return (
    <>
      {registerOTPSection ? (
        <div className={style.auth}>
          <TxtInput
            Icon={IoMailOutline}
            placeholder={"6 rəqəmli doğrulama kodu"}
            set={(e) => setOTPCode(e)}
            value={OTPCode}
          />
          <div>{errorMessage}</div>
          <SendCodeAgain
            OTPHandle={OTPHandle}
            notVerifiedTime={notVerifiedTime}
            notVerifiedTimeTxt={notVerifiedTimeTxt}
          />
          <SubBtn
            isErrLoading={isOTPBtnLoading}
            disabled={OTPCode.length < 4}
            click={handleRegister}
            txt={"Kodu doğrula"}
          />
        </div>
      ) : (
        <div className={style.auth}>
          <TxtInput
            Icon={IoPersonOutline}
            placeholder={"Ad və Soyadınız"}
            set={(e) => setUsername(e)}
            value={username}
          />
          <TxtInput
            Icon={IoMailOutline}
            placeholder={"E-Mail"}
            set={(e) => setEmail(e)}
            value={email}
          />
          <PassInput
            placeholder={"Şifrə"}
            set={(e) => setPassword(e)}
            value={password}
          />
          <div>{errorMessage}</div>
          <SubBtn
            isErrLoading={isRegLoading}
            disabled={!username || !email || !password}
            click={OTPHandle}
            txt={"Qeydiyyatdan keç"}
          />
        </div>
      )}
    </>
  );
}

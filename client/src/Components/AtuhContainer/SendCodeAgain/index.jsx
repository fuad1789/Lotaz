import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function Index({
  OTPHandle,
  notVerifiedTime,
  notVerifiedTimeTxt,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleResendCode = async () => {
    if (!isLoading) {
      setIsLoading(true);

      // Kod gönderme işlemi burada gerçekleştirilebilir
      OTPHandle();

      // Simüle edilen bir bekleme süresi (5 saniye)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (notVerifiedTime === null) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [notVerifiedTime]);

  return (
    <p style={{ fontSize: "0.9em", userSelect: "none !important" }}>
      {isLoading ? (
        <BarLoader color="#f27a1a" />
      ) : (
        <>
          <span
            onClick={handleResendCode}
            style={{
              cursor: "pointer",
              color:
                notVerifiedTime <= 0 || notVerifiedTime == null
                  ? "#f27a1a"
                  : "#A1A1A1C0",
              fontWeight: "600",
              pointerEvents:
                notVerifiedTime <= 0 || (notVerifiedTime != null && "none"),
            }}
          >
            Yenidən kod göndər?
          </span>
          {notVerifiedTime == null ? " 00 : 00 " : " : " + notVerifiedTimeTxt}
        </>
      )}
    </p>
  );
}

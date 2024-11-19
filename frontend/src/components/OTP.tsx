"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FormEvent } from "react";

type OtpComponentsPropsType = {
  continueHandler?: () => void;
};

export default function OTP({ continueHandler }: OtpComponentsPropsType) {
  return (
    <div
      style={{
        marginTop: "105px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <p
          style={{
            color: "#09090B",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Баталгаажуулах
        </p>

        <p
          style={{
            color: "#18181B",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: 400,
            marginBottom: "24px",
          }}
        >
          “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </p>

        {/* <div>
          <OTPField continueHandler={continueHandler} />
        </div> */}

        <p
          style={{
            color: "#71717A",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: 500,
            textDecoration: "underline",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          Дахин илгээх (30)
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ForgetPassComponentsPropsType = {
  continueHandler: () => void;
};

export default function ForgetPass({
  continueHandler,
}: ForgetPassComponentsPropsType) {
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        marginTop: "108px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: 600,
          marginBottom: "24px",
        }}
        className="flex justify-center"
        color="primary"
      >
        Нууц үг сэргээх
      </div>

      <div
        style={{
          width: "334px",
          color: "#71717A",
          fontSize: 14,
          fontFamily: "Inter",
          marginBottom: "16px",
          fontWeight: 400,
        }}
      >
        <Input
          name="email"
          type="email"
          className=""
          value={email}
          placeholder="Имэйл хаяг оруулах"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div
        style={{
          width: "334px",
          color: "#71717A",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: 500,
        }}
      >
        <Button
          variant="outline"
          className="w-[334px]"
          onClick={continueHandler}
        >
          Илгээх
        </Button>
      </div>
    </div>
  );
}

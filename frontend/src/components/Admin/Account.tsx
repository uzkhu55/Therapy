"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Account = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <SignedOut>
        <SignInButton aria-label="Бүртгүүлэх">Нэвтрэх</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
      </SignedIn>
    </div>
  );
};

export default Account;

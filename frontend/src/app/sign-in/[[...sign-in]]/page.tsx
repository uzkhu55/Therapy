import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-screen  justify-center">
      <SignIn
        forceRedirectUrl="/userDetail" // Redirects to /userDetail after successful sign-up
        appearance={{
          elements: {
            card: "bg-[#325342]",
            headerSubtitle: "text-white",
            socialButtons: "bg-white rounded-md",
            headerTitle: "text-white",
            dividerLine: "bg-white",
            dividerText: "text-white",
            formFieldLabel: "text-white",
            formFieldHintText: "text-white",
            formButtonPrimary: "bg-[#6A915C] ",
            internal: "bg-black",
          },
        }}
      />
    </div>
  );
}

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-screen  justify-center">
      <SignUp
        appearance={{
          elements: {
            card: "bg-[#325342]",
            headerSubtitle: "text-white",
            headerTitle: "text-white",
            socialButtons: "bg-white rounded-md",
            dividerLine: "bg-white",
            dividerText: "text-white",
            formFieldLabel: "text-white",
            formFieldHintText: "text-white",
            formButtonPrimary: "bg-[#6A915C] ",
            internal: "bg-white",
          },
        }}
      />
    </div>
  );
}

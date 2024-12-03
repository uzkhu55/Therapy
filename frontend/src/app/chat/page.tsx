import Chat from "@/components/Chat";
import { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <Chat />
      </Suspense>
    </div>
  );
};

export default page;

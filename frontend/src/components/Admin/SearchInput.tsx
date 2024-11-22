"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = ({
  setInputValue,
}: {
  setInputValue: (string: string) => void;
}) => {
  return (
    <div className="flex  w-[700px] relative">
      <button className="flex absolute right-3 top-2">
        <Search />
      </button>

      <Input
        placeholder="Email or Username "
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

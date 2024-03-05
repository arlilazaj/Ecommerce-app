"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    router.push(`/pages/SearchProducts?searchText=${search}`);
  };

  return (
    <input
      type="text"
      onChange={handleSearchChange}
      onKeyDown={handleKeyPress}
      className="border-solid border-2 outline-none border-orange-400 rounded-full h-9 p-4 text-xs w-64"
      placeholder=" Search Product"
    />
  );
};

export default SearchBar;

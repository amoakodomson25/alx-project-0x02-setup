import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-8 py-4">
      Header
      <div className="flex gap-4">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link> 
        <Link href="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Header;

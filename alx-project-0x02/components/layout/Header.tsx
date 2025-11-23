import Link from "next/link";
import React from "react";

const Header = () => {
  return <div className="flex flex-row justify-between px-8">
    Header
    <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
    </div>
    
    </div>;
};

export default Header;

import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const about = () => {
  return (
    <>
      <Header />
      <div className="text-center">
        <h1>About Page</h1>
      </div>
      <div className="flex gap-4 p-8 justify-center items-center">
        <Button size="large" shape="rounded-full" />
        <Button size="medium" shape="rounded-md" />
        <Button size="small" shape="rounded-sm" />
      </div>
    </>
  );
};

export default about;

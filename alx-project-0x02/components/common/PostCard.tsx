import { type PostProps } from "@/interfaces";
import React from "react";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border p-8 w-100">
      <>
        <div className="flex flex-col  ">
          <h1 className="text-bold text-2xl">{title}</h1>
          <p className="text-sm text-gray-400">User: {userId}</p>
        </div>
        <p>{content}</p>
      </>
    </div>
  );
};

export default PostCard;

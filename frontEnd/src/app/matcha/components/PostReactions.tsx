import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MessageCircleMore,
  Smile,
  ImageIcon,
} from "lucide-react";
import { Avatar, Button, Input, User } from "@nextui-org/react";
import Image from "next/image";

interface PostReactionsProps {
  likes: number;
  comments: number;
  description?: string;
}

export default function PostReactions() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Comment submitted");
    setComment("");
  }
  return (
    <div className=" w-full flex flex-col space-y-3">
      <div className=" mt-4 w-full flex items-center justify-between">
        <div className=" flex items-center space-x-4">
          <Button
            isIconOnly
            size="lg"
            variant="light"
            color="primary"
            className=" ml-0 text-white flex items-center space-x-1"
          >
            <Heart />
            <p>23</p>
          </Button>
          <Button
            onClick={(e) => setIsCommentOpen(!isCommentOpen)}
            isIconOnly
            size="lg"
            variant="light"
            color="primary"
            className=" p-0 text-white flex items-center space-x-1"
          >
            <MessageCircleMore />
            <p>23</p>
          </Button>
        </div>
        <div>
          <Bookmark />
        </div>
      </div>
      {isCommentOpen && (
        <div className=" w-full space-y-8 duration-300 ">
          <form
            className=" w-full space-x-2 flex items-center"
            onSubmit={handleCommentSubmit}
          >
            <Avatar />
            <Input
              variant="bordered"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              endContent={
                <div className="space-x-0 flex items-center">
                  <Button
                    variant="light"
                    color="primary"
                    className=" text-secondary"
                    isIconOnly
                  >
                    <Smile />
                  </Button>
                  <Button
                    variant="light"
                    color="primary"
                    className=" text-secondary"
                    isIconOnly
                  >
                    <ImageIcon />
                  </Button>
                </div>
              }
              color="secondary"
              className=" "
            />
          </form>
          <div className=" space-y-2">
            <User
              name="Charles Deo"
              description="Software Engineer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            ></User>
            <p className=" pl-12 text-white">Nestled beneath an azure sky</p>
          </div>
        </div>
      )}
    </div>
  );
}

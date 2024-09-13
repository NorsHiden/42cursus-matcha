import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MessageCircleMore,
  Smile,
  ImageIcon,
} from "lucide-react";
import { Avatar, Button, Divider, Input, User } from "@nextui-org/react";
import Image from "next/image";
import PostLike from "./LikePost";

interface User {
  name: string;
  description: string;
  avatar: string;
}

interface Comment {
  user: User;
  comment: string;
}

export default function PostReactions() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<Comment[]>([]);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment) return;
    console.log("Comment submitted = ", comment);
    const newComment: Comment = {
      user: {
        name: "John Doe",
        description: "Software developer",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d", // Replace with avatar URL
      },
      comment: comment,
    };

    // Update the postComments array with the new comment
    setPostComments([...postComments, newComment]);
    setComment("");
  };
  return (
    <div className=" w-full flex flex-col space-y-3">
      <div className=" mt-4 w-full flex items-center justify-between">
        <div className=" flex items-center space-x-4">
          <PostLike />
          <Button
            onClick={(e) => setIsCommentOpen(!isCommentOpen)}
            isIconOnly
            size="lg"
            variant="light"
            color="primary"
            className=" p-0 text-white flex items-center space-x-1"
          >
            <MessageCircleMore />
            <p>{postComments.length}</p>
          </Button>
        </div>
        <div>
          <Bookmark />
        </div>
      </div>
      {isCommentOpen && (
        <div className=" relative w-full space-y-8 duration-300  ">
          <form
            className=" w-full space-x-2 flex items-center"
            onSubmit={handleCommentSubmit}
          >
            <Avatar />
            <Input
              type="text"
              variant="bordered"
              value={comment}
              placeholder="Add a comment..."
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
              classNames={{
                base: "max-w-full",
                input: "text-white",
                inputWrapper: "border-gray-500 focus-within:border-secondary",
              }}
            />
          </form>
          <div className=" w-full space-y-8 max-h-[300px] overflow-y-auto ">
            {postComments.length === 0 ? (
              <p className="text-white/50 w-full flex items-center place-content-center ">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              postComments
                .slice()
                .reverse()
                .map((comment, index) => {
                  return (
                    <div key={index} className="space-y-1">
                      <User
                        name={comment.user.name}
                        description={comment.user.description}
                        avatarProps={{
                          src: comment.user.avatar,
                        }}
                      ></User>
                      <p className="pl-12 text-white rounded-xl break-words whitespace-normal">
                        {comment.comment}
                      </p>
                      <Divider className="bg-gray-500" />
                    </div>
                  );
                })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import React from "react";
import MasonryGrid from "./MasonryGrid";
import Descrp from "./Descrp";
import PostReactions from "./PostReactions";

const PostDropdown = () => {
  return (
    <Dropdown placement="left-start" className=" bg-primary">
      <DropdownTrigger>
        <Ellipsis />
      </DropdownTrigger>
      <DropdownMenu color="secondary">
        <DropdownItem key="Add">Add</DropdownItem>
        <DropdownItem key="Edit">Edit</DropdownItem>
        <DropdownItem key="Delete">Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Posts = () => {
  return (
    <Card className="bg-primary">
      <CardHeader className=" flex items-center justify-between">
        <div className=" flex items-center space-x-3">
          <Avatar size="lg" />
          <div className=" flex flex-col place-content-start">
            <p className=" text-white text-lg font-semibold">Charles Deo</p>
            <p className="  text-xs">15min ago</p>
          </div>
        </div>
        <PostDropdown />
      </CardHeader>
      <CardBody>
        <MasonryGrid />
      </CardBody>
      <CardFooter className=" w-full flex flex-col items-start">
        <Descrp text="Nestled beneath an azure sky, the majestic mountains in these captivating images stand as sent Nestled beneath an azure sky, the majestic mountains in these captivating images stand as sent"/>
        <PostReactions />
      </CardFooter>
    </Card>
  );
};

export default Posts;

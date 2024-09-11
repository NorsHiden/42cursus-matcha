"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { EllipsisVertical } from "lucide-react";
import React from 'react'

const ProfileDrop = () => {
  return (
    <Dropdown placement="left-start"className=" bg-primary">
    <DropdownTrigger>
      <EllipsisVertical/>
    </DropdownTrigger>
    <DropdownMenu color="secondary" >
      <DropdownItem key="Add">Add</DropdownItem>
      <DropdownItem key="Edit">Edit</DropdownItem>
      <DropdownItem key="Delete">Delete</DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

export default ProfileDrop
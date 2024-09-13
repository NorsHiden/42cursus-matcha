import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import UserCard from "../../components/UserCard";

const Cards = [
  {
    name: "Julia Mauro",
    image:
      "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fameRate: 1,
  },
  {
    name: "Felix Mauro",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fameRate: 3,
  },
  {
    name: "Marie Mauro",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fameRate: 2,
  },
  {
    name: "Vivian Mauro",
    image:
      "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fameRate: 4,
  },
];

const ProfileMatches = () => {
  return (
    <Card className=" h-full bg-primary">
      <CardBody>
        <div className=" w-full  gap-x-10 gap-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Cards.map((card, index) => (
            <UserCard
              key={index}
              name={card.name}
              imageUrl={card.image}
              fameRate={card.fameRate}
            />
          ))}
          {/* <UserCard />
          <UserCard />
          <UserCard />
          <UserCard /> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileMatches;

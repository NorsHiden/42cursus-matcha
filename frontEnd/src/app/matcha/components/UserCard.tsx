import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import React, { useState } from "react";

interface ProfileCardProps {
  name: string;
  imageUrl: string;
  fameRate: number;
}

const UserCard = ({ name, imageUrl, fameRate }: ProfileCardProps) => {
  const [isMatched, setIsMatched] = useState(true);
  return (
    <div className=" h-auto flex flex-col  items-center place-content-center py-5 px-2 rounded-xl bg-[#130F1F] w-full ">
      <div className=" w-full rounded-xl h-28 ">
        <img
          className=" w-full h-full rounded-xl object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      <p className=" mt-2 text-lg font-semibold">{name}</p>
      <div className=" mt-2 space-y-1 w-full px-3">
        <Button size="sm" color="primary" className=" font-medium  w-full">
          View Profile
        </Button>
        <Button
          onClick={() => setIsMatched(!isMatched)}
          size="sm"
          color="secondary"
          className=" font-medium flex items-center place-content-center  w-full"
        >
          <Heart className="" />
          <p className="">
            {isMatched ? "Matched" : "Match"}{" "}
            {/* {isMatched && <span className="text-secondary">- Chat</span>} */}
          </p>
        </Button>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <span className="text-white text-xs mt-3 mb-1">Fame Rate</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Heart
                key={star}
                className={`w-5 h-5 ${
                  star <= fameRate ? "text-secondary fill-secondary" : "text-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

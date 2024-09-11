import { X } from "lucide-react";
import React from "react";

const InterestsData = [
  "📷 Photographic" , "🎨 Art", "🐕 Dogs", "✈️ Travel", "🍗 Food","📷 Photographic" , "🎨 Art", "🐕 Dogs", "✈️ Travel", "🍗 Food","📷 Photographic" , "🎨 Art", "🐕 Dogs", "✈️ Travel", "🍗 Food"
]

const Interests = () => {
  return (
    <div className=" w-full h-auto bg-primary drop-shadow-xl rounded-xl px-5 py-3 space-y-3">
      <h1 className=" text-white text-xl font-semibold">
        Your <span className=" text-secondary">interests</span>
      </h1>
      <div>
        <div className="flex flex-wrap mt-4 gap-x-2 gap-y-3">
          {InterestsData.map((intrest, index) => {
            return(
              <div key={index} className="flex items-center px-3 py-1 border border-secondary rounded-lg">
                <span className="">{intrest}</span>
              </div>
            )
          } )}
        </div>
      </div>
    </div>
  );
};

export default Interests;

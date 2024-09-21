// 'use client'

// import { Autocomplete, AutocompleteItem, Chip } from "@nextui-org/react"
// import React, { useState, useCallback } from "react"
// // import { AutoComplete, AutoCompleteItem, Chip } from "@nextui-org/react"

// const interestsList = [
//   "Reading",
//   "Writing",
//   "Coding",
//   "Photography",
//   "Traveling",
//   "Cooking",
//   "Gaming",
//   "Music",
//   "Sports",
//   "Art",
//   "Yoga",
//   "Meditation",
//   "Dancing",
//   "Hiking",
//   "Gardening",
// ]

// export default function InterestsSelector() {
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([])

//   const handleSelectionChange = useCallback((selectedKey: React.Key) => {
//     const selectedInterest = selectedKey.toString()
//     setSelectedInterests(prevInterests => {
//       if (!prevInterests.includes(selectedInterest)) {
//         return [...prevInterests, selectedInterest]
//       }
//       return prevInterests
//     })
//   }, [])

//   const handleRemove = useCallback((interest: string) => {
//     setSelectedInterests(prevInterests => prevInterests.filter(item => item !== interest))
//   }, [])

//   return (
//     <div className="w-full  space-y-4">
//       <Autocomplete
//         label="Select your interests"
//         placeholder="Type to search..."
//         className="max-w-xl"
//         // onChange={handleSelectionChange}
//         onSelectionChange={ (value) => handleSelectionChange}
//       >
//         {interestsList.map((interest) => (
//           <AutocompleteItem key={interest} value={interest}>
//             {interest}
//           </AutocompleteItem>
//         ))}
//       </Autocomplete>

//       <div className="flex flex-wrap gap-2">
//         {selectedInterests.map((interest) => (
//           <Chip
//             key={interest}
//             onClose={() => handleRemove(interest)}
//             variant="flat"
//             color="secondary"
//           >
//             {interest}
//           </Chip>
//         ))}
//       </div>
//     </div>
//   )
// }
"use client";

import React, { useState, useMemo } from "react";
import {
  Chip,
  Autocomplete,
  AutocompleteItem,
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

// Extended list of interests categorized
const interestsCategories = {
  "Food & Drink": [
    "🍔 Food & Recipes",
    "🍰 Desserts & Baking",
    "🍳 Cooking Tips",
    "🥑 Healthy Eating",
    "🍷 Wine & Spirits",
    "☕ Coffee & Tea",
    "🌮 World Cuisine",
    "🍔 Fast Food",
    "🧑‍🍳 Culinary Arts",
    "🧑‍🍳 International Cuisines",
    "👩‍🍳 Baking Techniques",
  ],
  "Fitness & Sports": [
    "🏋️ Fitness & Exercise",
    "💪 Bodybuilding",
    "🚴 Cycling",
    "⚽ Soccer",
    "🏀 Basketball",
    "⚾ Baseball",
    "🏈 American Football",
    "🎾 Tennis",
    "🏒 Hockey",
    "⛷️ Winter Sports",
    "🏄 Water Sports",
    "👟 Running & Jogging",
    "🧗 Extreme Sports",
    "🏋️‍♀️ Weightlifting",
    "🧗‍♀️ Rock Climbing",
    "🏆 Competitions & Challenges",
  ],
  "Health & Wellness": [
    "🧘 Yoga & Meditation",
    "💡 Self-Improvement",
    "💊 Health & Wellness",
    "🧘 Mindfulness",
    "🚨 Emergency Preparedness",
    "🚑 First Aid",
  ],
  "Fashion & Beauty": [
    "🛍️ Fashion & Style",
    "👗 Women's Fashion",
    "👔 Men's Fashion",
    "💄 Makeup & Beauty",
    "🧴 Skincare",
    "👗 Vintage Fashion",
    "👩‍🎤 Cosplay",
    "👗 Fashion Design",
  ],
  "Arts & Crafts": [
    "🎨 Art & Craft",
    "🖌️ Painting",
    "🧵 Sewing & Knitting",
    "🖍️ Drawing & Sketching",
    "🖼️ Photography Tips",
    "🎭 Theater & Performing Arts",
    "🌸 Floral Design",
    "🎨 Color Theory",
    "🕯️ Candle Making",
  ],
  "Home & Lifestyle": [
    "🏠 Home Decor",
    "🛠️ DIY & Projects",
    "🛏️ Interior Design",
    "🌿 Gardening",
    "🌼 Spring Gardening",
    "📆 Time Management",
    "🛋️ Minimalism",
    "🛡️ Survival Skills",
  ],
  "Travel & Adventure": [
    "✈️ Travel & Adventure",
    "🧳 Travel Tips",
    "🏕️ Camping & Hiking",
    "🏜️ Adventure Travel",
    "🌅 Nature & Outdoors",
    "🏞️ National Parks",
    "🚢 Boating & Sailing",
    "🚂 Trains & Railways",
    "🛫 Travel Hacking",
    "🚚 Road Trips",
    "🚙 Off-Roading",
    "🏝️ Island Travel",
  ],
  "Technology & Science": [
    "📱 Technology & Gadgets",
    "💻 Web Development",
    "👨‍💻 Programming",
    "📊 Data Science",
    "📊 Investing",
    "💰 Cryptocurrency",
    "🔬 Science & Research",
    "🔭 Astronomy",
    "⚗️ Chemistry",
    "🚀 Space Exploration",
    "🧬 Biology & Genetics",
    "🧠 Neuroscience",
  ],
  "Entertainment & Media": [
    "🎬 Movies & TV Shows",
    "📺 TV Shows & Series",
    "🎵 Music & Podcasts",
    "🎮 Gaming",
    "🎤 Public Speaking",
    "🎧 Sound Design",
    "🎥 Filmmaking",
    "🎲 Roleplaying Games",
    "🕵️‍♂️ Conspiracy Theories",
    "👾 Sci-Fi",
    "🐉 Fantasy",
  ],
  "Pets & Animals": [
    "🐾 Pets & Animals",
    "🐕 Dog Training",
    "😺 Cat Care",
    "🦜 Exotic Pets",
    "🐦 Bird Watching",
    "🐠 Marine Life",
  ],
  "Education & Learning": [
    "📖 Education & Learning",
    "📚 Books & Literature",
    "📜 Poetry",
    "🌐 Languages & Translation",
    "🎓 College & University",
    "🧑‍🎨 Digital Art",
    "📐 Mathematics",
    "👩‍🍳 Culinary Arts",
  ],
  "Careers & Business": [
    "💼 Career & Business",
    "📈 Personal Finance",
    "👩‍💼 Entrepreneurship",
    "💼 Business Strategy",
    "💼 Freelancing",
  ],
  "Hobbies & Special Interests": [
    "🎯 Hobbies & Interests",
    "🧩 Puzzles & Brain Teasers",
    "🧩 Board Games",
    "🎯 Darts",
    "🎣 Fishing",
    "🏹 Archery",
    "🚵 Mountain Biking",
    "🐍 Herpetology",
    "🔮 Astrology",
    "📸 Portrait Photography",
  ],
};
// export default function EnhancedPinterestInterestsSelector() {
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string>(Object.keys(interestsCategories)[0])

//   const allInterests = useMemo(() => {
//     return Object.values(interestsCategories).flat();
//   }, []);

//   const toggleInterest = (interest: string) => {
//     setSelectedInterests((prev) =>
//       prev.includes(interest)
//         ? prev.filter((i) => i !== interest)
//         : [...prev, interest]
//     );
//   };

//   const filteredInterests = useMemo(() => {
//     return searchValue
//       ? allInterests.filter((interest) =>
//           interest.toLowerCase().includes(searchValue.toLowerCase())
//         )
//       : [];
//   }, [allInterests, searchValue]);

//   const handleSelectionChange = (key: React.Key) => {
//     if (typeof key === "string") {
//       toggleInterest(key);
//     }
//   };

//   const categories = Object.keys(interestsCategories);
//   const visibleCategories = categories.slice(0, 5);
//   const hiddenCategories = categories.slice(5);
//   const handleCategoryChange = (key: React.Key) => {
//     setSelectedCategory(key.toString())
//   }
//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Choose your interests
//       </h2>

//       <Autocomplete
//         label="Search interests"
//         className="max-w-xs mx-auto mb-6"
//         onInputChange={setSearchValue}
//         onSelectionChange={() => handleSelectionChange}
//       >
//         {filteredInterests.map((interest) => (
//           <AutocompleteItem key={interest} value={interest}>
//             {interest}
//           </AutocompleteItem>
//         ))}
//       </Autocomplete>

//       <Tabs
//         color="secondary"
//         className="bg-primary"
//         classNames={{ wrapper: "bg-primary" }}
//         aria-label="Interest categories"
//         selectedKey={selectedCategory}
//         onSelectionChange={(key) => setSelectedCategory(key as string)}
//       >
//         {visibleCategories.map((category) => (
//           <Tab key={category} title={category} />
//         ))}
//         {hiddenCategories.length > 0 && (
//           <Tab
//             key="more"
//             title={
//               <Dropdown>
//                 <DropdownTrigger>
//                   <Button variant="light">{`+${hiddenCategories.length}`}</Button>
//                 </DropdownTrigger>
//                 <DropdownMenu
//                   aria-label="More categories"
//                   onClick={value => handleCategoryChange}
//                 >
//                   {hiddenCategories.map((category) => (
//                     <DropdownItem key={category}>{category}</DropdownItem>
//                   ))}
//                 </DropdownMenu>
//               </Dropdown>
//             }
//           />
//         )}
//       </Tabs>

//       <div className="flex flex-wrap mt-4 gap-x-2 gap-y-3">
//         {selectedCategory &&
//           interestsCategories[selectedCategory].map((interest: any) => (
//             <Chip
//               key={interest}
//               variant={
//                 selectedInterests.includes(interest) ? "solid" : "bordered"
//               }
//               color="secondary"
//               className="cursor-pointer transition-all duration-200 hover:scale-105"
//               onClick={() => toggleInterest(interest)}
//             >
//               {interest}
//             </Chip>
//           ))}
//       </div>

//       <div className="mt-8 text-center">
//         <p className="text-lg font-semibold">
//           Selected Interests: {selectedInterests.length}
//         </p>
//         <div className="flex flex-wrap justify-center gap-2 mt-4">
//           {selectedInterests.map((interest) => (
//             <Chip
//               key={interest}
//               variant="solid"
//               color="primary"
//               onClose={() => toggleInterest(interest)}
//             >
//               {interest}
//             </Chip>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function EnhancedPinterestInterestsSelector() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Object.keys(interestsCategories)[0]
  );

  const allInterests = useMemo(() => {
    return Object.values(interestsCategories).flat();
  }, []);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const filteredInterests = useMemo(() => {
    return searchValue
      ? allInterests.filter((interest) =>
          interest.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];
  }, [allInterests, searchValue]);

  const handleSelectionChange = (key: React.Key) => {
    console.log(key);
    // if (typeof key === "string") {
      toggleInterest(key as string);
    // }
  };

  const categories = Object.keys(interestsCategories);
  const visibleCategories = categories.slice(0, 5);
  const hiddenCategories = categories.slice(5);

  const handleCategoryChange = (key: React.Key) => {
    setSelectedCategory(key.toString());
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Choose your interests
      </h2>

      <Autocomplete
        fullWidth
        label="Search interests"
        className=" mx-auto mb-6"
        onInputChange={setSearchValue}
        allowsCustomValue={true}
        // onSelectionChange={onSelectionChange}
        onSelectionChange={handleSelectionChange}
      >
        {filteredInterests.map((interest) => (
          <AutocompleteItem key={interest} value={interest}>
            {interest}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Tabs
        color="secondary"
        className="bg-primary"
        classNames={{ wrapper: "bg-primary" }}
        aria-label="Interest categories"
        selectedKey={selectedCategory}
        onSelectionChange={handleCategoryChange}
      >
        {visibleCategories.map((category) => (
          <Tab key={category} title={category} />
        ))}
        {hiddenCategories.length > 0 && (
          <Tab
            key="more"
            title={
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">{`+${hiddenCategories.length}`}</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="More categories"
                  onClick={handleCategoryChange}
                >
                  {hiddenCategories.map((category) => (
                    <DropdownItem key={category}>{category}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            }
          />
        )}
      </Tabs>

      <div className="flex flex-wrap mt-4 gap-x-2 gap-y-3">
        {interestsCategories[selectedCategory].map((interest: any) => (
          <Chip
            key={interest}
            variant={
              selectedInterests.includes(interest) ? "solid" : "bordered"
            }
            color="secondary"
            className="cursor-pointer transition-all duration-200 hover:scale-105"
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </Chip>
        ))}
      </div>

      <div className="mt-8 max-h-40 overflow-auto text-center">
        <p className="text-lg font-semibold">
          Selected Interests: {selectedInterests.length}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {selectedInterests.map((interest) => (
            <Chip
              key={interest}
              variant="solid"
              color="primary"
              onClose={() => toggleInterest(interest)}
            >
              {interest}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

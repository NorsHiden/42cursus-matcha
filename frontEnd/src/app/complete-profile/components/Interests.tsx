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
import { useUserProfileStore } from "@/store/completeProfileStore";

// Extended list of interests categorized
const initialInterestsCategories = {
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

export default function EnhancedPinterestInterestsSelector() {
  const [interestsCategories, setInterestsCategories] = useState<{
    [key: string]: string[];
  }>({
    ...initialInterestsCategories,
    "User Added": [],
  });
  // const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const { interests, setInterests } = useUserProfileStore();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Object.keys(interestsCategories)[0]
  );

  const allInterests = useMemo(() => {
    return Object.values(interestsCategories).flat();
  }, [interestsCategories]);


  const toggleInterest = (interest: string) => {
    // const { interests, setInterests } = useUserProfileStore();

    // Toggle the interest in Zustand's store
    setInterests(
      interests.includes(interest)
        ? interests.filter((i) => i !== interest) // Remove interest
        : [...interests, interest] // Add interest
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
    if (typeof key === "string") {
      toggleInterest(key as string);
    }
  };

  const categories = Object.keys(interestsCategories);
  const visibleCategories = categories.slice(0, 5);
  const hiddenCategories = categories.slice(5);

  const handleCategoryChange = (key: React.Key) => {
    console.log("key", key);
    setSelectedCategory(key.toString());
  };

  const handleAddCustomInterest = () => {
    if (searchValue.trim()) {
      const newInterest = searchValue.trim();
      if (!allInterests.includes(newInterest)) {
        setInterestsCategories((prev) => ({
          ...prev,
          "User Added": [...prev["User Added"], newInterest],
        }));
        toggleInterest(newInterest);
      } else {
        // If the interest already exists, just toggle it
        toggleInterest(newInterest);
      }
      setSearchValue("");
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Choose your interests</h2>

      <Autocomplete
        fullWidth
        color="secondary"
        label="Search interests"
        className=" mx-auto mb-6"
        onInputChange={setSearchValue}
        // allowsCustomValue={true}
        // onSelectionChange={onSelectionChange}
        onSelectionChange={handleSelectionChange}
        listboxProps={{
          emptyContent: (
            <div className="p-2 flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-2">No results found.</p>
              <Button color="primary" onClick={handleAddCustomInterest}>
                Add "{searchValue}" as new interest
              </Button>
            </div>
          ),
        }}
      >
        {filteredInterests.map((interest) => (
          <AutocompleteItem
            color="primary"
            startContent={
              interests.includes(interest) ? (
                <span className="text-primary mr-2">✓</span>
              ) : null
            }
            key={interest}
            value={interest}
          >
            {interest}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Tabs
        color="secondary"
        className="bg-primary flex flex-wrap w-full"
        classNames={{ wrapper: "bg-primary" }}
        aria-label="Interest categories"
        selectedKey={selectedCategory}
        onSelectionChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <Tab key={category} title={category} />
        ))}
      </Tabs>

      <div className="flex flex-wrap mt-4 gap-x-2 gap-y-3">
        {interestsCategories[selectedCategory].map((interest: any) => (
          <Chip
            key={interest}
            variant={
              interests.includes(interest) ? "solid" : "bordered"
            }
            color="secondary"
            className="cursor-pointer transition-all duration-200 hover:scale-105"
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </Chip>
        ))}
      </div>

      <div className="mt-8 max-h-40 overflow-auto ">
        <p className="text-lg font-semibold">
          Selected Interests: {interests.length}
        </p>
        <div className="flex flex-wrap justify- gap-2 mt-4">
          {interests.map((interest) => (
            <Chip
              key={interest}
              variant="solid"
              color="secondary"
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

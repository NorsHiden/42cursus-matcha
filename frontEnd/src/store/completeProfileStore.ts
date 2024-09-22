import { g, s } from "framer-motion/client";
import { create } from "zustand";

interface UserProfileState {
  firstName: string;
  lastName: string;
  gender: string;
  showMe: string;
  phoneNumber: number;
  address: string;
  birthday: Date;
  bio: string;
  images: File[];
  imagePreviews: string[];
  interests: string[];
  currentStep: number;
  firstNameError: string;
  lastNameError: string;
  genderError: string;
  showMeError: string;
  imageError: string;
  setFirstNameError: (firstNameError: string) => void;
  setLastNameError: (lastNameError: string) => void;
  setGenderError: (genderError: string) => void;
  setShowMeError: (showMeError: string) => void;
  setImageError: (imageError: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setGender: (gender: string) => void;
  setShowMe: (showMe: string) => void;
  setPhoneNumber: (phoneNumber: number) => void;
  setAddress: (address: string) => void;
  setBirthday: (birthday: Date) => void;
  setBio: (bio: string) => void;
  setImages: (images: File[]) => void;
  setImagePreviews: (imagePreviews: string[]) => void;
  setInterests: (interests: string[]) => void;
  nextStep: (stepsLength: number) => void;
  setCurrentStep: (currentStep: number) => void;
}

export const useUserProfileStore = create<UserProfileState>((set, get) => ({
  firstName: "",
  lastName: "",
  gender: "",
  showMe: "",
  phoneNumber: 0,
  address: "",
  birthday: new Date(),
  bio: "",
  images: [],
  imagePreviews: [], 
  interests: [],
  currentStep: 1,
  firstNameError: "",
  lastNameError: "",
  genderError: "",
  showMeError: "",
  imageError: "",
  setFirstNameError: (firstNameError) => set({ firstNameError }),
  setLastNameError: (lastNameError) => set({ lastNameError }),
  setGenderError: (genderError) => set({ genderError }),
  setShowMeError: (showMeError) => set({ showMeError }),
  setImageError: (imageError) => set({ imageError }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setGender: (gender) => set({ gender }),
  setShowMe: (showMe) => set({ showMe }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setAddress: (address) => set({ address }),
  setBirthday: (birthday) => set({ birthday }),
  setBio: (bio) => set({ bio }),
  setImages: (images) => set({ images }),
  setImagePreviews: (imagePreviews) => set({ imagePreviews }), 
  setInterests: (interests) => set({ interests }),
  setCurrentStep: (currentStep) => set({ currentStep }),

  nextStep: (stepsLength: number) => {
    const {
      firstName,
      lastName,
      gender,
      showMe,
      images,
      currentStep,
      setCurrentStep,
    } = get();
    console.log("currentStep", currentStep);
    console.log("images", images);
    if (currentStep === 3 && images.length < 5) {
      set({ imageError: "Please upload at least 5 image" });
      return;
    }
    if (
      currentStep === 2 &&
      (firstName === "" || lastName === "" || gender === "" || showMe === "")
    ) {
      firstName === ""
        ? set({ firstNameError: "First Name is required" })
        : set({ firstNameError: "" });
      lastName === ""
        ? set({ lastNameError: "Last Name is required" })
        : set({ lastNameError: "" });
      gender === ""
        ? set({ genderError: "gender is required" })
        : set({ genderError: "" });
      showMe === ""
        ? set({ showMeError: "Show me is required" })
        : set({ showMeError: "" });
      return;
    }
    set({ imageError: "" });
    // Move to the next step if there are no validation issues
    if (currentStep < stepsLength) {
      setCurrentStep(currentStep + 1);
    }
  },
}));
//

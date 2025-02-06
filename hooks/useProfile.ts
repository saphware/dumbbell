interface ProfileData {
  name: string;
  weight: number;
  height: number;
  age: number;
  profileImage: string;
}

export const useProfile = (): ProfileData => {
  return {
    name: "John Doe",
    weight: 75, // in kg
    height: 175, // in cm
    age: 30,
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", // Using dicebear for demo avatar
  };
};

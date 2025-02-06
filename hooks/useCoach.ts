interface CoachData {
    profileImage: string;
    name: string;
    description: string;
    qualifications: string;
    experience: string;
    philosophy: string;
}

export const useCoach = (): CoachData => {
    return {
        profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        name: "Kayle Damn",
        description: "description",
        qualifications: "qualifications",
        experience: "experience",
        philosophy: "philosophy", // Using dicebear for demo avatar
    };
  };

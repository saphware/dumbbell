import { Coach } from "@/types";

export const useCoach = (): Coach => {
    return {
        id: 1,
        id_user: 2,
        user_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        description: "description",
        created_at: 'string',
        updated_at: 'string',
    };
  };

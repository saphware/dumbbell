interface ProfileData {
    id_client: number;
    id_user: number;
    profileImage: string;
    name: string;
    weight: number;
    weight_unit: string;
    height: number;
    height_unit: string;
    age: number;
    current_activity: string;
    target_activity: string;
    goal: string;
    streak: number;
    maximum_streak: number;
    target_weight: number;
}

export const useProfile = (): ProfileData => {
    return {
        profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        id_client: 1,
        id_user: 1,
        name: "John Doe",
        weight: 75,
        weight_unit: "kg",
        height: 175,
        height_unit: "cm",
        age: 30,
        current_activity: "sedentary",
        target_activity: "moderate",
        goal: "weight_loss",
        streak: 3,
        maximum_streak: 0,
        target_weight: 70
    };
};

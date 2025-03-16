import { Client, Coach, User } from "@/types";
import { Role } from '@/constants/Roles';

export const useUser = (): User => {
    return {
        id: 1,
        name: 'Joe',
        id_company: 100,
        id_auth: 2,
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-10T00:00:00Z',
        role: 0,
        is_new_user: 0,
    };
}

export const useClient = (): Client => {
    return {
        id: 1,
        id_user: 101,
        height: 175,
        weight: 70,
        weight_unit: 'kg',
        height_unit: 'cm',
        streak: 5,
        maximum_streak: 10,
        current_activity: 3,
        target_activity: 5,
        goal: 'Lose weight',
        user_image: 'https://example.com/image.jpg',
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-10T00:00:00Z',
        target_weight: 65,
    };
};

export const useCoach = (): Coach => {
    return {
        id: 1,
        id_user: 102,
        user_image: 'https://example.com/image.jpg',
        description: 'Certified fitness coach with 5 years of experience.',
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-10T00:00:00Z',
    };
};

export const useProfile = () => {
    const userData = useUser();
    if (userData.role === Role.Client) {
        const clientData = useClient();
        return {
            userData, clientData
        }
    }

    const coachData = useCoach();
    return { userData , coachData};
};
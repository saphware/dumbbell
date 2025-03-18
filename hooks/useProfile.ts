import { Client, Coach, User } from "@/types";
import { Role } from '@/constants/Roles';
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await AsyncStorage.getItem("user");
            setUser(userData ? JSON.parse(userData) : null);
            };
        fetchUser();
    }, []);

    return user;
};


export const getUser = () => {

    const [userData, setUset] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            console.log(user);
        }
        fetchUser();
    }, [])

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
  
    if (!userData) return null;
  
    if (userData.role === Role.Client) {
      return { userData, clientData: useClient() };
    }
    return { userData, coachData: useCoach() };
  };
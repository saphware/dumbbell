import { Client, Coach, User } from "@/types";
import { Role } from '@/constants/Roles';
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';

export const useUser = () => {
    
    const [userData, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: supaUser, error: authError } = await supabase.auth.getUser();
            
            if (authError || !supaUser?.user) {
                console.error("Error obteniendo usuario:", authError);        
                return;
            }

            const { data: user, error } = await supabase
                .from("user")
                .select("*")
                .eq("id_auth", supaUser.user.id)
                .single();

            if (error) {
                console.error("Error obteniendo datos del usuario:", error);
            } else {
                setUser(user);
            }
        };

        fetchUser();
    }, []);
    return userData;
};

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
    const clientProfile = useClient();
    const coachProfile = useCoach();
  
    if (!userData) return { user: null, profile: null };
  
    const profile = userData.role === Role.Client ? clientProfile : coachProfile;
  
    return { user: userData, profile };
  };
  
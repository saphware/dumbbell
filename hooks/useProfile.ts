import { Client, Coach, User } from "@/types";
import { Role } from '@/constants/Roles';
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';
import { useCoach } from "@/hooks/useCoach";
import { useClient } from "@/hooks/useClient";
import coach from "@/app/(app)/coach";

export const useUser = (): User | null => {
    
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

export const useProfile = () => {
    const userData: User | null = useUser();
    const clientProfile = useClient(userData?.id);
    const coachProfile = useCoach(userData?.id);

    if (!userData) return { user: null, profile: null };
    
    const profile = userData.role === Role.Client ? clientProfile : coachProfile;
  
    return { user: userData, profile };
  };
  
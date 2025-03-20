import { Coach } from "@/types";
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';
import { getFullUser } from "@/api/user";

export const useCoach = (id_user: number | undefined): Coach | null => {
    const [coachData, setCoachData] = useState<Coach | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            if (id_user) {
                const data = await getFullUser(id_user, "coach");
                setCoachData(data);
            }
        } catch (error) {
          console.error("Error obteniendo datos del cliente:", error);
        }
      };
  
      fetchData();
    }, [id_user]);
  
    return coachData;
  };

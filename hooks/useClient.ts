import { Client, Coach, User } from "@/types";
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';
import { getFullUser } from "@/api/user";

export const useClient = (id_user: number | undefined): Client | null => {
  const [clientData, setClientData] = useState<Client | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id_user) {
            const data = await getFullUser(id_user, "client");
            setClientData(data);
        }
      } catch (error) {
        console.error("Error obteniendo datos del cliente:", error);
      }
    };

    fetchData();
  }, [id_user]);

  return clientData;
};

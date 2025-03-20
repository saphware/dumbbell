import { Client, Coach, User } from "@/types";
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase';
import { getFullUser } from "@/api/user";
import { InitialFormData } from "@/types";

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


export const updateUserClientByInitialForm = async (id_user: number | undefined, formData: InitialFormData) => {
  if (!id_user || !formData) {
    return { data: null, error: {message: "ID de usuario o datos inválidos"}};
  }

  return await supabase.rpc("update_user_client", {
    p_name: formData.name,
    p_id_user: id_user,
    p_height: formData.height,
    p_weight: formData.weight,
    p_weight_unit: formData.weight_unit,
    p_height_unit: formData.height_unit
  });
};

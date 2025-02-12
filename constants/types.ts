export type Client = {
    id: number;
    id_user: number;
    height: number;
    user_image: string;
    weight: number;
    weight_unit: string;
    height_unit: string;
    streak: number;
    maximum_streak: number;
    current_activity: number;
    target_activity: number;
    goal: string;
    created_at: string;
    updated_at: string;
    target_weight: number;
};

export type Coach = {
    id: number;
    id_user: number;
    user_image: string;
    description: string;
    created_at: string;
    updated_at: string;
};

export type Routine = {
    id: number;
    id_client: number;
    id_coach: number;
    name: string;
    goal: string;
    created_at: string;
    updated: boolean;
    last_updated: string;
};

export type Exercise = {
    id: number;
    name: string;
    url_video: string;
    description: string;
    created_at: string;
};

export type RoutineExercise = {
    id: number;
    id_routine: number;
    id_exercise: number;
    sets: number;
    reps: number;
    weight: number;
    note: string;
    assigned_date: string;
    created_at: string;
};

export type User = {
    id: number;
    name: string;
    id_company: number;
    id_auth: number;
    created_at: string;
    updated_at: string;
    role: number;
};
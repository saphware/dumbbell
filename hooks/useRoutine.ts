import { Exercise, Routine, RoutineExercise } from '@/constants/types';

// Simulación de datos para una rutina
const mockRoutine: Routine = {
    id: 1,
    id_client: 1,
    id_coach: 1,
    name: "Rutina de Fuerza",
    goal: "Aumentar masa muscular",
    created_at: new Date().toISOString(),
    updated: false,
    last_updated: new Date().toISOString(),
};

const mockExercises: Exercise[] = [
    {
        id: 1,
        name: "Press de Banca",
        url_video: "https://example.com/press-banca",
        description: "Ejercicio para trabajar el pecho.",
        created_at: new Date().toISOString(),
    },
    {
        id: 2,
        name: "Sentadillas",
        url_video: "https://example.com/sentadillas",
        description: "Ejercicio para trabajar las piernas.",
        created_at: new Date().toISOString(),
    },
    {
        id: 3,
        name: "Dominadas",
        url_video: "https://example.com/dominadas",
        description: "Ejercicio para trabajar la espalda.",
        created_at: new Date().toISOString(),
    },
    {
        id: 4,
        name: "Sentadillas",
        url_video: "https://example.com/sentadillas",
        description: "Ejercicio para trabajar las piernas.",
        created_at: new Date().toISOString(),
    },
    {
        id: 5,
        name: "Dominadas",
        url_video: "https://example.com/dominadas",
        description: "Ejercicio para trabajar la espalda.",
        created_at: new Date().toISOString(),
    },
];

const mockRoutineExercises: RoutineExercise[] = [
    {
        id: 1,
        id_routine: mockRoutine.id,
        id_exercise: mockExercises[0].id,
        sets: 3,
        reps: 10,
        weight: 70, // Peso en kg
        note: "Aumentar peso la próxima semana",
        assigned_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
    {
        id: 2,
        id_routine: mockRoutine.id,
        id_exercise: mockExercises[1].id,
        sets: 4,
        reps: 12,
        weight: 60, // Peso en kg
        note: "Mantener la forma correcta",
        assigned_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
    {
        id: 3,
        id_routine: mockRoutine.id,
        id_exercise: mockExercises[2].id,
        sets: 3,
        reps: 8,
        weight: 0, // Dominadas, peso corporal
        note: "Usar banda elástica si es necesario",
        assigned_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
];

// Exportar los datos simulados
export { mockRoutine, mockExercises, mockRoutineExercises };
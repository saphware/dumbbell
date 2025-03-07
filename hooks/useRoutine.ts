// import { Exercise, Routine, RoutineExercise } from '@/constants/types';

// // Simulación de datos para una rutina
// const mockRoutine: Routine = {
//     id: 1,
//     id_client: 1,
//     id_coach: 1,
//     name: "Rutina de Fuerza",
//     goal: "Aumentar masa muscular",
//     created_at: new Date().toISOString(),
//     updated: false,
//     last_updated: new Date().toISOString(),
// };

// const mockExercises: Exercise[] = [
//     {
//         id: 1,
//         name: "Press de Banca",
//         url_video: "https://example.com/press-banca",
//         description: "Ejercicio para trabajar el pecho.",
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 2,
//         name: "Sentadillas",
//         url_video: "https://example.com/sentadillas",
//         description: "Ejercicio para trabajar las piernas.",
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 3,
//         name: "Dominadas",
//         url_video: "https://example.com/dominadas",
//         description: "Ejercicio para trabajar la espalda.",
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 4,
//         name: "Sentadillas",
//         url_video: "https://example.com/sentadillas",
//         description: "Ejercicio para trabajar las piernas.",
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 5,
//         name: "Dominadas",
//         url_video: "https://example.com/dominadas",
//         description: "Ejercicio para trabajar la espalda.",
//         created_at: new Date().toISOString(),
//     },
// ];

// const mockRoutineExercises: RoutineExercise[] = [
//     {
//         id: 1,
//         id_routine: mockRoutine.id,
//         id_exercise: mockExercises[0].id,
//         sets: 3,
//         reps: 10,
//         weight: 70, // Peso en kg
//         note: "Aumentar peso la próxima semana",
//         assigned_date: new Date().toISOString(),
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 2,
//         id_routine: mockRoutine.id,
//         id_exercise: mockExercises[1].id,
//         sets: 4,
//         reps: 12,
//         weight: 60, // Peso en kg
//         note: "Mantener la forma correcta",
//         assigned_date: new Date().toISOString(),
//         created_at: new Date().toISOString(),
//     },
//     {
//         id: 3,
//         id_routine: mockRoutine.id,
//         id_exercise: mockExercises[2].id,
//         sets: 3,
//         reps: 8,
//         weight: 0, // Dominadas, peso corporal
//         note: "Usar banda elástica si es necesario",
//         assigned_date: new Date().toISOString(),
//         created_at: new Date().toISOString(),
//     },
// ];

// // Exportar los datos simulados
// export { mockRoutine, mockExercises, mockRoutineExercises };

export type Exercise = {
    id: string;
    order: number;
    image: string;
    name: string;
    description: string;
    weight: number;
    reps: number;
    sets: number;
    comment?: string;
};

export type Routine = {
    id: string;
    title: string;
    image: string;
    exercises: Exercise[];
};

export const routines: Routine[] = [
    {
        id: "1",
        title: "Full Body Beginner",
        image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        exercises: [
            {
                id: "1-1",
                order: 1,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Sentadillas",
                description: "Realiza una sentadilla profunda con peso moderado.",
                weight: 40,
                reps: 10,
                sets: 4,
            },
            {
                id: "1-2",
                order: 2,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            },
            {
                id: "1-3",
                order: 3,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            },
            {
                id: "1-4",
                order: 4,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            },
            {
                id: "1-5",
                order: 5,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            },
            {
                id: "1-6",
                order: 6,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            }
        ]
    },
    {
        id: "2",
        title: "Upper Body Strength",
        image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        exercises: [
            {
                id: "2-1",
                order: 1,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Dominadas",
                description: "Realiza dominadas con agarre supino o pronado.",
                weight: 0,
                reps: 12,
                sets: 4,
                comment: "Si es difícil, usa una banda elástica."
            },
            {
                id: "2-2",
                order: 2,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press Militar",
                description: "Levanta la barra por encima de la cabeza con buena técnica.",
                weight: 30,
                reps: 10,
                sets: 4
            }
        ]
    },
    {
        id: "3",
        title: "Lower Body Power",
        image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        exercises: [
            {
                id: "3-1",
                order: 1,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Peso Muerto",
                description: "Mantén la espalda recta y sube el peso desde el suelo.",
                weight: 80,
                reps: 6,
                sets: 4,
            },
            {
                id: "3-2",
                order: 2,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Zancadas con Mancuernas",
                description: "Da un paso largo hacia adelante y baja la rodilla.",
                weight: 20,
                reps: 12,
                sets: 3,
                comment: "No apoyes la rodilla en el suelo."
            }
        ]
    }
];

export const useRoutine = () => {
    return routines;
};

import { Exercise, Routine, RoutineExercise } from '@/types';

// export type Exercise = {
//     id: string;
//     order: number;
//     image: string;
//     name: string;
//     description: string;
//     weight: number;
//     reps: number;
//     sets: number;
//     comment?: string;
// };

// export type Routine = {
//     id: string;
//     name: string;
//     image: string;
//     exercises: Exercise[];
// };

export const routines: Routine[] = [
    {
        id: 1,
        name: "Full Body Beginner",
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
            },
            {
                id: "1-7",
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
                id: "1-8",
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
                id: "1-9",
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
                id: "1-10",
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
                id: "1-11",
                order: 6,
                image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                name: "Press de Banca",
                description: "Usa una barra con peso moderado y baja hasta el pecho.",
                weight: 50,
                reps: 8,
                sets: 4,
                comment: "Controla bien la bajada."
            }
        ],
        id_client: 0,
        id_coach: 0,
        goal: '',
        created_at: '',
        updated: false,
        last_updated: ''
    },
    {
        id: 2,
        name: "Upper Body Strength",
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
        ],
        id_client: 0,
        id_coach: 0,
        goal: '',
        created_at: '',
        updated: false,
        last_updated: ''
    },
    {
        id: 3,
        name: "Lower Body Power",
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
        ],
        id_client: 0,
        id_coach: 0,
        goal: '',
        created_at: '',
        updated: false,
        last_updated: ''
    }
];

export const useRoutine = () => {
    return routines;
};

export type Routine = {
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

export type Student = {
    id: string;
    image: string;
    name: string;
    height: string;
    weight: string;
    goal: string;
    routine: Routine[];
};

export const routines: Student[] = [
    {
        id: "id",
        image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        name: "name",
        height: "height",
        weight: "weight",
        goal: "goal",
        routine: [
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
    }
];

export const useRoutine = () => {
    return routines;
};

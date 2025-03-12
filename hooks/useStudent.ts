// Definición de tipos
export type exercise = {
    id: string;
    order: number;
    name: string;
    descripcion: string;
    weight: number;
    reps: number;
    series: number;
    comment?: string;
};

export type Routine = {
    id: string;
    title: string;
    daysPerWeek: number; // Indica la cantidad de días de la rutina (1 a 7)
    image: string;
    exercises: exercise[];
};

export type Student = {
    id: string;
    name: string;
    weight: number;
    height: number;
    goal: string;
    image: string;
    routine: Routine[];
};

// Simulación de datos de alumnos
const student: Student[] = [
    {
        id: "1",
        name: "Juan Pérez",
        weight: 75,
        height: 175,
        goal: "Aumento de masa muscular",
        image: "https://images.pexels.com/photos/1229356/pexels-image-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        routine: [
            {
                id: "rutina1",
                title: "Rutina Fullbody",
                daysPerWeek: 3,
                image: "https://images.pexels.com/photos/1229356/pexels-image-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                exercises: [
                    {
                        id: "ejercicio1",
                        order: 1,
                        name: "Sentadilla con barra",
                        descripcion: "exercise para trabajar las piernas y glúteos.",
                        weight: 60,
                        reps: 12,
                        series: 4
                    }
                ]
            },
            {
                id: "rutina2",
                title: "Rutina de Hipertrofia",
                daysPerWeek: 5,
                image: "https://images.pexels.com/photos/1229356/pexels-image-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                exercises: [
                    {
                        id: "ejercicio2",
                        order: 1,
                        name: "Press de banca",
                        descripcion: "exercise para pectorales y tríceps.",
                        weight: 40,
                        reps: 10,
                        series: 4
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        name: "María González",
        weight: 60,
        height: 165,
        goal: "Reducción de grasa corporal",
        image: "https://images.pexels.com/photos/1229356/pexels-image-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
        routine: [
            {
                id: "rutina3",
                title: "Rutina de Resistencia",
                daysPerWeek: 4,
                image: "https://images.pexels.com/photos/1229356/pexels-image-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg",
                exercises: [
                    {
                        id: "ejercicio3",
                        order: 1,
                        name: "Burpees",
                        descripcion: "exercise funcional para todo el cuerpo.",
                        weight: 0,
                        reps: 15,
                        series: 4
                    }
                ]
            }
        ]
    }
];

export default student;

export const useStudent = () => {
    return student;
};
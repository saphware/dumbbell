import { textStyles } from '@/style/textStyles';
import React from 'react';
import { Text } from 'react-native';

export default function QuoteComponent() {

    const quotes = [
        "¿Excusas o resultados ? No se consiguen al mismo tiempo. ¡Vamos a entrenar! 💪🔥",
        "Tu yo del futuro te lo va a agradecer.Dale, metele a esa rutina. 👏",
        "¿Un día más o un día menos ? Hoy es el día para moverte. 🏋️‍♀️",
        "La constancia gana.No hace falta ser el mejor, solo hay que seguir. 🚀",
        "Esa serie no se va a levantar sola...Pero vos sí. ¡Arriba! 🏋️‍♂️",
        "El sillón es cómodo, pero no te deja fuerte.Tu entrenamiento sí. 😉",
        "Minutos de fiaca o una hora de orgullo.Elegí bien. 🏆",
        "Si ya llegaste hasta acá, ¿por qué no seguir ? Una repetición más. 🔥",
        "No esperes motivación, creala.Dale play a tu rutina. 🎶💪",
        "No sos un Pokémon, pero podés evolucionar. ¡Entrená! ⚡",
        "Tu equipo de gym te extraña.Y tus músculos también. 🏋️‍♀️",
        "¿Saltar el entrenamiento ? Solo si es parte del warm - up. 😏",
        "La ducha post - entreno te espera.Y va a sentirse increíble. 🚿🔥",
        "Entrenar o entrenar.No hay opción B. 💥",
        "Si fueras a rendirte, ya lo habrías hecho.Así que a seguir. 💪",
        "Hacelo por vos.Nadie más lo va a hacer. 💯",
        "La mejor inversión es en vos mismo.Y empieza con esta rutina. 🚀",
        "El único mal entrenamiento es el que no hacés.Así que... ¡A entrenar! 😎",
        "Hoy tenés una cita con las pesas.Y te están esperando. 🏋️‍♂️",
        "Sos más fuerte de lo que pensás.Ahora demostralo. 🔥",
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <Text style={textStyles.quotes}>{randomQuote}</Text>
    );
};

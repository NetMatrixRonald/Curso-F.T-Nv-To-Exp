
import { useEffect, useState } from "react";





export const useTrafficHook = () => {

    const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse'
    }

     type TrafficLightColorWithEffect = keyof typeof colors;


    const [light, setLight] = useState<TrafficLightColorWithEffect>('red')
    const [countdown, setCountdown] = useState(5)


    // Effect for countdown
        useEffect(() => {

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
        
    }, [countdown, light])

    // Effect for change color
    useEffect(() => {

        if (countdown === 0) {
            setCountdown(5);
            if (light === 'red') {
                setLight('green');
                return;
            }

            if (light === "yellow") {
                setLight('red');
                return;
            }
            if (light === 'green') {
                setLight('yellow');
                return;
            }
            return;
        }
        

    }, [countdown])


    return {
        // Values / Props
        countdown,
        light,
        colors,

        percentage: (countdown / (5 * 100)),
        redLight: light === 'red' ? colors[light] : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
        greenLight: light === 'green' ? colors[light] : 'bg-gray-500'

    }
}

export default useTrafficHook




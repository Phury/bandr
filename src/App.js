import './App.css';
import {ProgressBar} from "./components/ProgressBar";
import {Timer} from "./components/Timer";
import {useEffect, useState} from "react";

function App() {
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState("");
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const animationDuration = 20000;
    const refreshInterval = 1000;


    useEffect(() => {
        const startDate = new Date("2024-09-01");
        const endDate = new Date("2024-12-16");

        const updateJourney = () => {
            const today = new Date();
            // Calculate total journey days and days passed
            const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
            const daysPassed = (today - startDate) / (1000 * 60 * 60 * 24);

            // Calculate progress percentage
            const currentProgress = Math.min((daysPassed / totalDays) * 100, 100);
            setProgress(currentProgress);

            // Calculate progress animation
            if (animatedProgress < progress) {
                setAnimatedProgress((prev) => Math.min(prev + (progress / (animationDuration / 1000)), progress));
            }


            // Calculate time left
            const timeDifference = endDate - today;
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);
                let message = `${days}d ${hours}h ${minutes}m ${seconds}s left until the One Ring is destroyed... or banned!`;

                if (days === 0 && hours < 1) {
                    message = "The One Ring's fate is sealed in just hours!";
                } else if (days === 0 && hours === 0 && minutes < 10) {
                    message = "The journey ends soon... Will Wizards destroy the Ring?";
                }

                setTimeLeft(message);
            } else {
                setTimeLeft("The One Ring has been destroyed... but what of the MTG ban?");
            }
        }

        /*
        const resetJourney = setInterval(() => {
            setAnimatedProgress(0);
        }, animationDuration);
        */
        const journey = setInterval(updateJourney, refreshInterval);
        return () => {
            clearInterval(journey);
            /*clearInterval(resetJourney)*/
        };

    }, [progress, animatedProgress, animationDuration]);

    return (
        <div className="map-container">
            <Timer timeLeft={timeLeft}/>
            <ProgressBar progress={animatedProgress} />
        </div>
    );
}

export default App;

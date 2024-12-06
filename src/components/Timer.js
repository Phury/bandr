import './Timer.css';
import theOneRing from "../assets/tor_mtg.jpg";

export function Timer({ timeLeft }) {
    return (
        <div>
            <div className="timer-container">
                {timeLeft}
            </div>
            <div className="theOneRing">
                <img src={theOneRing} alt="MTG the one ring card" className="icon-image" />
            </div>
        </div>
    );
}
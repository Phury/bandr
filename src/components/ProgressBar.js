import React from "react";
import './ProgressBar.css';
import frodoSam from "../assets/frodo-and-sam.png";
import mordor from "../assets/mordor.png";

export function ProgressBar({ progress }) {

    return (
        <div className="progress-container">
            <div className="frodo-and-sam" style={{ left: `${progress}%` }}>
                <img src={frodoSam} alt="Frodo and Sam" className="icon-image"/>
            </div>
            <div className="mordor">
                <img src={mordor} alt="An icon of mordor" className="icon-image" />
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div> {/* Example progress */}
            </div>
        </div>
    );
}

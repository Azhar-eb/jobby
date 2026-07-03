import { useState } from "react";
import "./EmployerDashboard.css";

function EmployerDashboard() {
    const [selected, setSelected] = useState(null);

    const candidates = [
        {
            name: "Ahmed Ali",
            role: "Frontend Developer",
            experience: "2 years",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            cv: "CV_Ahmed.pdf"
        },
        {
            name: "Sarah Johnson",
            role: "UI/UX Designer",
            experience: "3 years",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            cv: "CV_Sarah.pdf"
        },
        {
            name: "Mohamed Hassan",
            role: "Backend Developer",
            experience: "4 years",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            cv: "CV_Mohamed.pdf"
        }
    ];

    return (
        <div className="employer-container">

            <h2>Employer Dashboard</h2>

            <div className="dashboard">

                {/* LEFT: list */}
                <div className="candidate-list">

                    {candidates.map((c, index) => (
                        <div
                            key={index}
                            className="candidate-card"
                            onClick={() => setSelected(c)}
                        >
                            <h3>{c.name}</h3>
                            <p>{c.role}</p>
                            <p>{c.experience}</p>
                        </div>
                    ))}

                </div>

                {/* RIGHT: details */}
                <div className="candidate-view">

                    {!selected && (
                        <p>Select a candidate to view details</p>
                    )}

                    {selected && (
                        <>
                            <h3>{selected.name}</h3>

                            <p><strong>Role:</strong> {selected.role}</p>
                            <p><strong>Experience:</strong> {selected.experience}</p>

                            {/* VIDEO */}
                            <video
                                src={selected.video}
                                controls
                                className="video-box"
                            />

                            {/* CV */}
                            <div className="cv-box">
                                📄 {selected.cv}
                            </div>

                            <button className="shortlist-btn">
                                Shortlist Candidate
                            </button>
                        </>
                    )}

                </div>

            </div>

        </div>
    );
}

export default EmployerDashboard;
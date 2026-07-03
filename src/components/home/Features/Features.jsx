import {
    FaVideo,
    FaFileAlt,
    FaSearch,
    FaShieldAlt
} from "react-icons/fa";

import "./Features.css";

function Features() {
    const features = [
        {
            icon: <FaVideo />,
            title: "60-Second Video Profile",
            text: "Introduce yourself with a short video instead of just text on a CV."
        },
        {
            icon: <FaFileAlt />,
            title: "Smart Resume Upload",
            text: "Upload your CV and let employers see your full experience."
        },
        {
            icon: <FaSearch />,
            title: "Smart Job Matching",
            text: "Get matched with jobs that fit your skills and experience."
        },
        {
            icon: <FaShieldAlt />,
            title: "Private & Secure",
            text: "You control who can view your profile and video."
        }
    ];

    return (
        <section className="features">
            <div className="container">

                <div className="section-header">
                    <h2>Why Jobby?</h2>
                    <p>We combine video + resume to create better hiring decisions.</p>
                </div>

                <div className="features-grid">

                    {features.map((item, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Features;
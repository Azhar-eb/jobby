import {
    FaUser,
    FaVideo,
    FaRocket
} from "react-icons/fa";

import "./HowItWorks.css";

function HowItWorks() {
    const steps = [
        {
            icon: <FaUser />,
            title: "Create Your Profile",
            text: "Sign up and build your professional profile with skills and experience."
        },
        {
            icon: <FaVideo />,
            title: "Upload CV & Video",
            text: "Add your resume and record a 60-second introduction video."
        },
        {
            icon: <FaRocket />,
            title: "Get Matched & Hired",
            text: "Employers discover you and connect directly for opportunities."
        }
    ];

    return (
        <section className="how">
            <div className="container">

                <div className="section-header">
                    <h2>How Jobby Works</h2>
                    <p>Three simple steps to your next opportunity</p>
                </div>

                <div className="steps">

                    {steps.map((step, index) => (
                        <div className="step" key={index}>

                            <div className="icon">
                                {step.icon}
                            </div>

                            <h3>
                                {index + 1}. {step.title}
                            </h3>

                            <p>{step.text}</p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
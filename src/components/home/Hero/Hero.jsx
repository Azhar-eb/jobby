import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container hero-container">

                {/* LEFT SIDE */}
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <span className="badge">🎥 Future of Hiring</span>

                    <h1>
                        Beyond the Resume. <br />
                        Show Your Story.
                    </h1>

                    <p>
                        Create a profile, upload your CV, and record a 60-second video
                        introduction to connect with employers in a more human way.
                    </p>

                    <div className="hero-buttons">

                        <Button
                            variant="primary"
                            onClick={() => navigate("/jobs")}
                        >
                            Find a Job
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => navigate("/candidates")}
                        >
                            Hire Talent
                        </Button>

                    </div>

                    <div className="stats">
                        <div>
                            <h3>12K+</h3>
                            <p>Candidates</p>
                        </div>

                        <div>
                            <h3>450+</h3>
                            <p>Companies</p>
                        </div>

                        <div>
                            <h3>25K+</h3>
                            <p>Applications</p>
                        </div>
                    </div>

                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="hero-card">
                        🎥 Video Profile Uploaded
                    </div>

                    <div className="hero-card">
                        📄 Resume Ready
                    </div>

                    <div className="hero-card">
                        ⭐ 92% Profile Match
                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Hero;
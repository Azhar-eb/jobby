import Button from "../../common/Button/Button";
import "./CTA.css";

function CTA() {
    return (
        <section className="cta">
            <div className="container cta-container">

                <h2>Start Hiring Smarter. Or Get Hired Faster.</h2>

                <p>
                    Join Jobby today and experience a new way of connecting talent and opportunity
                    through video and real profiles.
                </p>

                <div className="cta-buttons">
                    <Button variant="primary">
                        I'm Looking for a Job
                    </Button>

                    <Button variant="secondary">
                        I'm Hiring
                    </Button>
                </div>

            </div>
        </section>
    );
}

export default CTA;
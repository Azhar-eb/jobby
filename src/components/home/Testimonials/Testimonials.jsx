import "./Testimonials.css";

function Testimonials() {
    const testimonials = [
        {
            name: "Ahmed Ali",
            role: "Frontend Developer",
            text: "I got hired within 2 weeks using my video profile. Employers actually saw who I am, not just my CV.",
            rating: 5
        },
        {
            name: "Sarah Johnson",
            role: "HR Manager",
            text: "The video introduction saved us so much time in interviews. We can quickly understand candidates before meeting them.",
            rating: 5
        },
        {
            name: "Mohamed Hassan",
            role: "Backend Developer",
            text: "Traditional job platforms feel cold. Jobby makes hiring feel human again.",
            rating: 4
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">

                <div className="section-header">
                    <h2>What People Say</h2>
                    <p>Real feedback from candidates and employers</p>
                </div>

                <div className="testimonial-grid">

                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>

                            <div className="stars">
                                {"⭐".repeat(item.rating)}
                            </div>

                            <p className="text">
                                "{item.text}"
                            </p>

                            <div className="author">
                                <strong>{item.name}</strong>
                                <span>{item.role}</span>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;
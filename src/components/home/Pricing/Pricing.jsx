import Button from "../../common/Button/Button";
import "./Pricing.css";

function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            description: "Basic access for candidates and employers",
            features: [
                "Create profile",
                "Upload CV",
                "Browse jobs"
            ]
        },
        {
            name: "Basic",
            price: "$19",
            description: "Better visibility and limited video access",
            features: [
                "Everything in Free",
                "View CVs",
                "Watch 30s of video",
                "Post 5 jobs"
            ],
            highlight: true
        },
        {
            name: "Premium",
            price: "$49",
            description: "Full access for serious hiring",
            features: [
                "Unlimited job posts",
                "Full video access",
                "Download CVs",
                "Priority candidate ranking"
            ]
        }
    ];

    return (
        <section className="pricing">
            <div className="container">

                <div className="section-header">
                    <h2>Pricing Plans</h2>
                    <p>Choose the plan that fits your hiring needs</p>
                </div>

                <div className="pricing-grid">

                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.highlight ? "active" : ""}`}
                        >

                            <h3>{plan.name}</h3>
                            <h1>{plan.price}</h1>
                            <p>{plan.description}</p>

                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✔ {feature}</li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "primary" : "secondary"}
                            >
                                Choose Plan
                            </Button>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Pricing;
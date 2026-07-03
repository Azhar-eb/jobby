import Button from "../../common/Button/Button";
import "./FeaturedJobs.css";

function FeaturedJobs() {
    const jobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp",
            location: "Remote",
            salary: "$3,000 - $5,000"
        },
        {
            title: "Backend Developer",
            company: "InnovateX",
            location: "Bahrain",
            salary: "$2,500 - $4,500"
        },
        {
            title: "UI/UX Designer",
            company: "DesignHub",
            location: "Remote",
            salary: "$2,000 - $3,500"
        },
        {
            title: "Marketing Specialist",
            company: "Growthify",
            location: "Dubai",
            salary: "$2,200 - $4,000"
        }
    ];

    return (
        <section className="jobs">
            <div className="container">

                <div className="section-header">
                    <h2>Featured Jobs</h2>
                    <p>Explore opportunities from top companies</p>
                </div>

                <div className="jobs-grid">

                    {jobs.map((job, index) => (
                        <div className="job-card" key={index}>

                            <div className="job-top">
                                <h3>{job.title}</h3>
                                <span>{job.company}</span>
                            </div>

                            <div className="job-info">
                                <p>📍 {job.location}</p>
                                <p>💰 {job.salary}</p>
                            </div>

                            <Button variant="primary">
                                Apply Now
                            </Button>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default FeaturedJobs;
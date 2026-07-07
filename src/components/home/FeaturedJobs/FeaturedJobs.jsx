import Button from "../../common/Button/Button";
import "./FeaturedJobs.css";

function FeaturedJobs() {
    const jobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp",
            location: "Remote",
            salary: "BHD500 - BHD800"
        },
        {
            title: "Backend Developer",
            company: "InnovateX",
            location: "Bahrain",
            salary: "BHD500 - BHD1000"
        },
        {
            title: "UI/UX Designer",
            company: "DesignHub",
            location: "Remote",
            salary: "BHD500 - BHD900"
        },
        {
            title: "Marketing Specialist",
            company: "Growthify",
            location: "Dubai",
            salary: "Negotiable"
        }
    ];

    return (
        <section className="jobs">
            <div className="container">
                {/*TITLE OF THE SECTION*/}
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
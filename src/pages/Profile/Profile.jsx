import { useState } from "react";
import "./Profile.css";

function Profile() {
    const [video, setVideo] = useState(null);

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        setVideo(URL.createObjectURL(file));
    };

    return (
        <div className="profile-container">

            <h2>My Profile</h2>

            {/* BASIC INFO */}
            <div className="profile-card">
                <h3>Candidate Info</h3>
                <p>Name: John Doe</p>
                <p>Role: Frontend Developer</p>
                <p>Experience: 2 years</p>
            </div>

            {/* CV UPLOAD (mock) */}
            <div className="profile-card">
                <h3>Resume</h3>
                <input type="file" />
            </div>

            {/* VIDEO UPLOAD */}
            <div className="profile-card">
                <h3>60-Second Introduction Video</h3>

                <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                />

                {video && (
                    <video
                        src={video}
                        controls
                        className="video-preview"
                    />
                )}
            </div>

        </div>
    );
}

export default Profile;
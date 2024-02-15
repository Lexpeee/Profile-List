import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";

const ProfilePreview = ({ profile }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            {PROFIILE_PARAMS.map(({ key }, i) => (
                <span key={i} style={{ width: 200 }}>
                    {profile[key]}
                </span>
            ))}
        </div>
    );
};

export default ProfilePreview;

import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";

const ProfileList = ({ profiles }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {PROFIILE_PARAMS.map(({ columnTitle }, i) => (
                    <h3 key={i} style={{ width: 200, textAlign: "center" }}>
                        {columnTitle}
                    </h3>
                ))}
            </div>
            {profiles.map((prof) => (
                <ProfilePreview profile={prof} />
            ))}
        </div>
    );
};

export default ProfileList;

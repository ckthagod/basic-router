import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = ({name}) => {
    let navigate = useNavigate();
    let { user } = useParams();
    return (
        <div>
            <div>this is the profile of {name}</div>
            <button onClick={() => navigate("/about")}>Change to About Page</button>
        </div>
    )
}

export default Profile
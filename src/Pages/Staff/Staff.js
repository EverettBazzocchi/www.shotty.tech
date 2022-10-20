import { useState, useEffect } from 'react';

import { Route, Routes } from "react-router-dom";

import api from '../../api';

import './Components/Staff.css';

import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';

const Staff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        api.listDocuments('staffStats').then((response) => {
            console.log(response);
            setStaff(response.documents);
        }).catch((error) => { console.log(error) });
    }, []);

    return (
        <div id ="Staff-Page">
            <h3>Staff Profiles</h3>
            <Sidebar key={staff} staff={staff} />
            <Routes>
                {staff.map((staff) => {
                    return <Route key={staff.$id} path={staff.username} element={<Profile staff={staff} />} />
                })};
            </Routes>
        </div>
    )
}

export default Staff
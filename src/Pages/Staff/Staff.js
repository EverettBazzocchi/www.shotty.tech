import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import api from '../../api';

import './Components/Staff.css';

import Profile from './Components/Profile';

const Staff = () => {
    const [staff, setStaff] = useState([]);
    useEffect(() => {
        api.listDocuments('staffStats').then((staff) => {
            console.log(staff.documents);
            setStaff(staff.documents);
        }).catch((error) => { console.log(error) });
    }, []);
    return (
        <div id ="Staff-Page">
            <Routes>
                {staff.map((staff) => {
                    return <Route path={staff.username} element={<Profile staff={staff} />} />
                })};
            </Routes>
        </div>
    )
}

export default Staff
import { NavLink } from "react-router-dom"

const Sidebar = (staff) => {

    console.log(staff);

    return (
        <aside>
            <h4>Staff</h4>
            <ul id="owner">
                <h4>Owner</h4>
                {staff.staff.map((staff) => {
                    if (staff.rank === "Owner" && staff.username !== "Master Admin") {
                        return (
                            <NavLink to={staff.username} activeClassName="active">
                                <li key={staff.$id}>
                                    {staff.username}
                                </li>
                            </NavLink>
                        )
                    }
                })
                }
            </ul>
            <ul id="admin">
                <h4>Admin</h4>
                {staff.staff.map((staff) => {
                    if (staff.rank === "admin" ) {
                        return (
                            <NavLink to={staff.username} activeClassName="active">
                                <li key={staff.$id}>
                                    {staff.username}
                                </li>
                            </NavLink>
                        )
                    }
                })
                }

            </ul>
            <ul id="srmod">
                <h4>SR. MOD</h4>
                {staff.staff.map((staff) => {
                    if (staff.rank === "srmod") {
                        return (
                            <NavLink to={staff.username} activeClassName="active">
                                <li key={staff.$id}>
                                    {staff.username}
                                </li>
                            </NavLink>
                        )
                    }
                })
                }

            </ul>
            <ul id="mod">
                <h4>MOD</h4>
                {staff.staff.map((staff) => {
                    if (staff.rank === "mod") {
                        return (
                            <NavLink to={staff.username} activeClassName="active">
                                <li key={staff.$id}>
                                    {staff.username}
                                </li>
                            </NavLink>
                        )
                    }
                })
                }

            </ul>
        </aside>
    )
}

export default Sidebar
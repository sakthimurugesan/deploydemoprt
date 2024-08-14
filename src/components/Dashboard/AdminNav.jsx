import { Link, Navigate } from "react-router-dom";
import './AdminNav.css'
function AdminNav() {
    return (
        <>
            <div className="admin-nav">
                
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/dashboard/events'>Events</Link>
                <Link to='/dashboard/users'>Users</Link>
                <Link to='/dashboard/event-register'>Event Register</Link>
                <Link to='/dashboard/contact'>Contact</Link>
               
            </div>

        </>
    )
}

export default AdminNav;
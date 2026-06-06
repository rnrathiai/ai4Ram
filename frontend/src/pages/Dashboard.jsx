import {useState, useEffect} from 'react'
import './Dashboard.css'

function Dashboard ({username, onLogout}){
    const [dashboard,setDashboardData] = useState(null);
    const [err,setError] = useState("")

    useEffect(()=>{
        async function fetchDashboard(){
            const token = localStorage.getItem('token');

            if (!token){
                onLogout();
                return;
            }
            try{
                const response = await fetch("http://localhost:3000/dashboard", {
                    method: "GET",
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                });
                const data = await response.json();

                if (!response.ok){
                    setError(data.messge);
                    onLogout();
                    return;
                }

                setDashboardData(data);
            } catch (err){
                setError("Server Error please try again")
                console.log('Dashboard error ', err);
            }
        }
        fetchDashboard()
    },[]);



    return(
         <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome back, {username}! 👋</h1>
                <p>You are logged in to AI4Ram</p>
                <button className='logout-btn' onClick={onLogout}>Logout</button>
            </div>

            <div className="dashboard-cards">
                <div className="card">
                    <h3>Profile</h3>
                    <p>Username: {username}</p>
                    <p>Status: Active</p>
                </div>

                <div className="card">
                    <h3>Activity</h3>
                    <p>Last login: Today</p>
                    <p>Sessions: 1</p>
                </div>

                <div className="card">
                    <h3>Settings</h3>
                    <p>Theme: Default</p>
                    <p>Notifications: On</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
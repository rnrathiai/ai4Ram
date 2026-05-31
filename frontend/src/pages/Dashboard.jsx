import './Dashboard.css'

function Dashboard ({username}){
    return(
         <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome back, {username}! 👋</h1>
                <p>You are logged in to AI4Ram</p>
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
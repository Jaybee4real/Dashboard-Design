import logo from "./random-lady.webp";
import "./index.scss";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="dashboard-container">
      <div className={`sidebar-container ${sidebarOpen ? "active" : ""}`}>
        <div className="logo">blueBox</div>

        <div className="profile-container">
          <img src={logo} alt="Profile" />
          <div className="right">
            <div className="name">Angelina Doe</div>
            <div className="title">Project Manager</div>
          </div>
        </div>
        <div className="sidebar-items-container">
          <div className="sidebar-item active">
            Dashboard <i className="fa fa-home"></i>
          </div>
          <div className="sidebar-item">
            UI Elements<i className="fa fa-acorn"></i>
          </div>
          <div className="sidebar-item">
            Components <i className="fab fa-elementor"></i>
          </div>
          <div className="sidebar-item">
            Forms Stuff <i className="fa fa-home"></i>
          </div>
          <div className="sidebar-item">
            Data Table <i className="fa fa-th"></i>
          </div>
          <div className="sidebar-item">
            Icons <i className="fa fa-home"></i>
          </div>
          <div className="sidebar-item">
            Sample Page <i className="fa fa-home"></i>
          </div>
          <div className="sidebar-item">
            Extra <i className="fa fa-home"></i>
          </div>

          <div className="sidebar-btn btn">Add Project</div>
        </div>
      </div>

      <div className={`dashboard-main-container ${sidebarOpen ? "transition-right" : ""}`}>
        <div className="navbar-container">
          <div className="left-side">
            <i
              className={`fal fa-bars mobile-navbar-toggle ${sidebarOpen ? "fa-times" : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            ></i>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search Project" />
          </div>

          <div className="right-side">
            <div className="navbar-profile">
              <img src={logo} alt="Profile" />
              <div className="name">Angelina Doe</div>
            </div>
            <i className="fa fa-envelope"></i>
            <i className="fa fa-bell"></i>
            <i className="fas fa-treasure-chest"></i>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <i className="far fa-tachometer"></i>Dashboard
          </div>

          <div className="cards-container">
            <div className="card">
              <i className="far fa-chart-line"></i>
              <div className="card-text">Stock Total</div>
              <div className="card-text big">$150000</div>
              <div className="card-text bottom">Increased By 60%</div>
            </div>
            <div className="card">
              <i className="fas fa-database"></i>
              <div className="card-text">Total Profit</div>
              <div className="card-text big">$250000</div>
              <div className="card-text bottom">Increased By 30%</div>
            </div>
            <div className="card">
              <i className="fas fa-flag"></i>
              <div className="card-text">Unique Visitors</div>
              <div className="card-text big">250000</div>
              <div className="card-text bottom">Increased By 80%</div>
            </div>
          </div>

          <div className="table-container">
            <table border="1" frame="hsides" rules="rows" bordercolor="#cccccc">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>UserType</th>
                  <th>Joined</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mike Doe</td>
                  <td>okorojijaybee1@gmail.com</td>
                  <td>Admin</td>
                  <td>27th march 2021</td>
                  <td className="badge">
                    <div>Pending</div>
                  </td>
                </tr>
                <tr>
                  <td>Mike Doe</td>
                  <td>okorojijaybee1@gmail.com</td>
                  <td>Admin</td>
                  <td>27th march 2021</td>
                  <td className="badge approved">
                    <div>Approved</div>
                  </td>
                </tr>
                <tr>
                  <td>Mike Doe</td>
                  <td>okorojijaybee1@gmail.com</td>
                  <td>Admin</td>
                  <td>27th march 2021</td>
                  <td className="badge approved">
                    <div>Approved</div>
                  </td>
                </tr>
                <tr>
                  <td>Mike Doe</td>
                  <td>okorojijaybee1@gmail.com</td>
                  <td>Admin</td>
                  <td>27th march 2021</td>
                  <td className="badge done">
                    <div>Selected</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

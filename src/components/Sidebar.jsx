import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { IoPerson, IoPeople, IoHome, IoLogOut} from "react-icons/io5"
import {FaTable} from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset} from "../features/authSlice";


const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">
          General
        </p>
          <ul className="menu-list">
            <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
            
            <li><NavLink to={`/profile`}><IoPeople/> Profile</NavLink></li>
            <li><NavLink to={`/gaji`}><IoPeople/> Gaji User</NavLink></li>
            <li><NavLink to={"/absenperson"}><FaTable/> Absensi</NavLink></li>
          </ul>
          
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label">
                Admin
              </p>
                <ul className="menu-list">
                  <li><NavLink to={"/users"}><IoPerson/> User</NavLink></li>
                  <li><NavLink to={"/gajilist"}><FaTable/> Gaji</NavLink></li>
                  <li><NavLink to={"/employees"}><IoPeople/> Karyawan</NavLink></li>
                  <li><NavLink to={"/absenlist"}><FaTable/> Daftar Absensi</NavLink></li>
                </ul>
              </div>
          )}
          
        <p className="menu-label">
          Setting
        </p>
          <ul className="menu-list">
            <li><button onClick={logout} className='button is-white'><IoLogOut/> Logout</button></li>
          </ul>
      </aside>
    </div>
    // <div id="app">
    //   <aside className="aside is-placed-left is-expanded">
    //     <div className="aside-tools">
    //       <div className="aside-tools-label">
    //         <span><h1>Admin</h1></span>
    //       </div>
    //     </div>
    //     <div className="menu is-menu-main">
    //       <p className="menu-label">General</p>
    //       <ul className="menu-list">
    //         <li>
    //           <a href="index.html" className="is-active router-link-active has-icon">
    //             <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
    //             <span className="menu-item-label">Dashboard</span>
    //           </a>
    //         </li>
    //       </ul>
    //       <p className="menu-label">Components</p>
    //       <ul className="menu-list">
    //         <li>
    //           <a href="tables.html" className="has-icon">
    //             <span className="icon has-update-mark"><i className="mdi mdi-table"></i></span>
    //             <span className="menu-item-label">Tables</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a href="forms.html" className="has-icon">
    //             <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
    //             <span className="menu-item-label">Forms</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a href="profile.html" className="has-icon">
    //             <span className="icon"><i className="mdi mdi-account-circle"></i></span>
    //             <span className="menu-item-label">Profile</span>
    //           </a>
    //         </li>
    //       </ul>
    //       <p className="menu-label">About</p>
    //       <ul className="menu-list">
    //         <li>
    //           <a href="" className="has-icon">
    //             <span className="icon"><i className="mdi mdi-help-circle"></i></span>
    //             <span className="menu-item-label">About</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    // </div>
  );
};
export default Sidebar;
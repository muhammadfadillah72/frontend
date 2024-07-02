import React from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset} from "../features/authSlice";
import logo from "../logo.png"

const Navbar = () => {
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
      <nav className="navbar is-fix-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="90" height="28" alt='logo'/>
          </NavLink>
      
          <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <div id='app'>
    //     <nav id="navbar-main" className="navbar is-fixed-top">
    //     <div className="navbar-brand">
    //       <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
    //         <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
    //       </a>
    //       <div className="navbar-item has-control">
    //         <div className="control"><input placeholder="Search everywhere..." className="input"/></div>
    //       </div>
    //     </div>
    //     <div className="navbar-brand is-right">
    //       <a className="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
    //         <span className="icon"><i className="mdi mdi-dots-vertical"></i></span>
    //       </a>
    //     </div>
    //     <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
    //       <div className="navbar-end">
    //         <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider is-hoverable">
    //           <a className="navbar-link is-arrowless">
    //             <span className="icon"><i className="mdi mdi-menu"></i></span>
    //             <span>Sample Menu</span>
    //             <span className="icon">
    //             <i className="mdi mdi-chevron-down"></i>
    //           </span>
    //           </a>
    //           <div className="navbar-dropdown">
    //             <a href="profile.html" className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-account"></i></span>
    //               <span>My Profile</span>
    //             </a>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-settings"></i></span>
    //               <span>Settings</span>
    //             </a>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-email"></i></span>
    //               <span>Messages</span>
    //             </a>
    //             <hr className="navbar-divider"/>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-logout"></i></span>
    //               <span>Log Out</span>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
    //           <a className="navbar-link is-arrowless">
    //             <div className="is-user-avatar">
    //               <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe"/>
    //             </div>
    //             <div className="is-user-name"><span>John Doe</span></div>
    //             <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
    //           </a>
    //           <div className="navbar-dropdown">
    //             <a href="profile.html" className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-account"></i></span>
    //               <span>My Profile</span>
    //             </a>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-settings"></i></span>
    //               <span>Settings</span>
    //             </a>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-email"></i></span>
    //               <span>Messages</span>
    //             </a>
    //             <hr className="navbar-divider"/>
    //             <a className="navbar-item">
    //               <span className="icon"><i className="mdi mdi-logout"></i></span>
    //               <span>Log Out</span>
    //             </a>
    //           </div>
    //         </div>
    //         <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" title="About" className="navbar-item has-divider is-desktop-icon-only">
    //           <span className="icon"><i className="mdi mdi-help-circle-outline"></i></span>
    //           <span>About</span>
    //         </a>
    //         <a title="Log out" className="navbar-item is-desktop-icon-only">
    //           <span className="icon"><i className="mdi mdi-logout"></i></span>
    //           <span>Log out</span>
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  )
}

export default Navbar;
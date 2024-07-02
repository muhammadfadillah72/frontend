import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Employees from "./pages/Employees";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import ProfilePage from "./pages/ProfilePage";
import GajiPage from "./pages/GajiPage";
import EditGaji from "./pages/EditGaji";
import Gaji from "./pages/Gaji";
import Absen from "./pages/Absen";
import AddGaji from "./pages/AddGaji";
import AddAbsen from "./pages/AddAbsen";
import EditAbsen from "./pages/EditAbsen";
import AbsenPerson from "./pages/AbsenPerson";

import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Login />} />
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/users" element = {<Users />} />
          <Route path="/employees" element = {<Employees />} />
          <Route path="/user/add" element = {<AddUser />} />
          <Route path="/user/edit/:id" element = {<EditUser />} />
          <Route path="/employee/add" element = {<AddEmployee />} />
          <Route path="/employee/edit/:id" element = {<EditEmployee />} />
          <Route path="/profile" element = {<ProfilePage />} />
          <Route path="/gaji" element = {<GajiPage />} />
          <Route path="/gaji/edit/:id" element = {<EditGaji />} />
          <Route path="/gajilist" element = {<Gaji />} />
          <Route path="/gaji/add" element = {<AddGaji />} />
          <Route path="/absenlist" element = {<Absen />} />
          <Route path="/absen/add" element = {<AddAbsen />} />
          <Route path="/absen/edit/:id" element = {<EditAbsen />} />
          <Route path="/absenperson" element = {<AbsenPerson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
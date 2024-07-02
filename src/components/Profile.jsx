import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';

const Profile = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
      getEmployee();
  }, []);

  const getEmployee = async () => {
      const response = await axios.get("http://localhost:5000/employeesperson");
      setEmployee(response.data);
  };

  const deleteEmployee = async(employeeId) => {
      await axios.delete(`http://localhost:5000/employee/${employeeId}`);
      getEmployee();
  };

  const convertBlobToImage = (blob) => {
      const binary = new Uint8Array(blob).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
      return `data:image/jpeg;base64,${window.btoa(binary)}`;
  }

  return (
    <div>
    
    <div className="tile is-parent">
        <div className="card tile is-child">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon"><i className="mdi mdi-account default"></i></span>
              Profile
            </p>
          </header>
          {employee.map((employee, index) => (
          <div key={employee.uuid}>
          <div className="card-content" >
            <div className="is-user-avatar image has-max-width is-aligned-centered">
              <img src={employee.foto} alt="" />
            </div>
            <div className="field">
              <label className="label">NIP</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.nip} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Lengkap</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.user.username} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Username</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.nama_lengkap} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Tempat Lahir</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.tempat_lahir} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Lahir</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={moment(employee.tanggal_lahir).format('DD/MM/YYYY')} className="input is-static"/>
              </div>
            </div>
             <div className="field">
              <label className="label">Jenis Kelamin</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.jenis_kelamin} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Nomor Telepon</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.no_telepon} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.alamat} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Agama</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.agama} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Status</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.setatus} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Jabatan</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.jabatan} className="input is-static"/>
              </div>
            </div>
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
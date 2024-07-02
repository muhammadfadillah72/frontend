import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

const GuruList = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:5000/employees");
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
        <h1 className='title'>Guru</h1>
        <h2 className='subtitle'>List of Guru</h2>
        <Link to="/employee/add" className='button is-primary mb-2'>
            Add New
        </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>NIP</th>
                    <th>Nama Lengkap</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>No Telepon</th>
                    <th>Alamat</th>
                    <th>Agama</th>
                    <th>Status</th>
                    <th>Jabatan</th>
                    <th>Foto</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
            {employee.map((employee, index) => (
                <tr key={employee.uuid}>
                    <td>{index + 1}</td>
                    <td>{employee.nip}</td>
                    <td>{employee.nama_lengkap}</td>
                    <td>{employee.tempat_lahir}</td>
                    <td>{moment(employee.tanggal_lahir).format('DD/MM/YYYY')}</td>
                    <td>{employee.jenis_kelamin}</td>
                    <td>{employee.no_telepon}</td>
                    <td>{employee.alamat}</td>
                    <td>{employee.agama}</td>
                    <td>{employee.setatus}</td>
                    <td>{employee.jabatan}</td>
                    <td>{employee.foto && <img src={convertBlobToImage(employee.foto.data)} alt={employee.nama_lengkap}/>}</td>
                    <td>
                    <Link to={`/employee/edit/${employee.uuid}`}
                        className='button is-small is-info'>
                            Edit
                        </Link>
                        <button 
                        onClick={() => deleteEmployee(employee.uuid)}
                        className='button is-small is-danger'
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default GuruList
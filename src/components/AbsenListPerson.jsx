import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AbsenListPerson = () => {
    const [absen, setAbsen] = useState([]);

    useEffect(() => {
        getAbsen();
    }, []);

    const getAbsen = async () => {
        const response = await axios.get("http://localhost:5000/absenperson");
        setAbsen(response.data);
    };

    const deleteAbsen = async (absenId) => {
        await axios.delete (`http://localhost:5000/absen/${absenId}`);
        getAbsen();
    }
  return (
    <div>
    <h1 className='title'>Absen</h1>
    <h2 className='subtitle'>List of absen</h2>
    <Link to="/absen/add" className='button is-primary mb-2'>
     Add new
    </Link>
    <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Periode absen</th>
                <th>Tanggal Absen</th>
                <th>Waktu Hadir</th>
                <th>Waktu Pulang</th>
                <th>Keterangan</th>
                <th>Bukti</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            {absen.map((absen, index) => (
            <tr key={absen.uuid}>
                <td>{index + 1}</td>
                <td>{absen.user.username}</td>
                <td>{absen.periode_absen}</td>
                <td>{moment(absen.tanggal_absen).format('DD/MM/YYYY')}</td>
                <td>{absen.waktu_hadir}</td>
                <td>{absen.waktu_pulang}</td>
                <td>{absen.keterangan}</td>
                <td><embed src={`data:appication/pdf;base64,${absen.bukti}`} type="application/pdf"/></td>
                <td>
                    <Link to={`/absen/edit/${absen.uuid}`}
                    className='button is-small is-info'>
                        Tambah Absen Pulang
                    </Link>
                    <button 
                    onClick={() => deleteAbsen(absen.uuid)}
                    className='button is-small is-danger'>
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

export default AbsenListPerson;
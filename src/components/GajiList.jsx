import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const GajiList = () => {
    const [gaji, setGaji] = useState([]);

    useEffect(() => {
        getGaji();
    }, []);

    const getGaji = async () => {
        const response = await axios.get("http://localhost:5000/gaji");
        setGaji(response.data);
    };

    const deleteGaji = async (gajiId) => {
        await axios.delete (`http://localhost:5000/gaji/${gajiId}`);
        getGaji();
    }
  return (
    <div>
        <h1 className='title'>Gaji</h1>
        <h2 className='subtitle'>List of gaji</h2>
        <Link to="/gaji/add" className='button is-primary mb-2'>
         Add new
        </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Gaji Pokok</th>
                    <th>Bonus</th>
                    <th>Tanggal Gaji</th>
                    <th>Periode Gaji</th>
                    <th>Total Gaji</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {gaji.map((gaji, index) => (
                <tr key={gaji.uuid}>
                    <td>{index + 1}</td>
                    <td>{gaji.total_gaji}</td>
                    <td>{gaji.bonus}</td>
                    <td>{moment(absen.tanggal_gaji).format('DD/MM/YYYY')}</td>
                    <td>{gaji.periode_gaji}</td>
                    <td>{gaji.total_gaji}</td>
                    <td>
                        <Link to={`/gaji/edit/${gaji.uuid}`}
                        className='button is-small is-info'>
                            Edit
                        </Link>
                        <button 
                        onClick={() => deleteGaji(gaji.uuid)}
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

export default GajiList
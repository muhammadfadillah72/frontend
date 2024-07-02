import React, {useState , useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FormAddAbsen = () => {
    const [periodeAbsen, setPeriodeAbsen] = useState("");
    const [tanggalAbsen, setTanggalAbsen] = useState("");
    const [waktuHadir, setWaktuHadir] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [bukti, setBukti] = useState("");
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTanggalAbsen(formattedDate);

        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, 'o');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        setWaktuHadir(`${hours}:${minutes}`);
    }, []);

    const saveAbsen = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/absen', {
                periode_absen : periodeAbsen,
                tanggal_absen : tanggalAbsen,
                waktu_hadir : waktuHadir,
                keterangan : keterangan,
                bukti : bukti
            });
            navigate("/absenList");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
        <h1 className='title'>Absen</h1>
        <h2 className='subtitle'>Tambah Absen</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveAbsen}>
                        <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                            <label className='label'>Periode Absen</label>
                            <div className="control">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder='Periode Absen'
                                    value={periodeAbsen}
                                    onChange={(e) => setPeriodeAbsen(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                                <label className='label'>Tanggal Absen</label>
                                <div className="control">
                                    <input 
                                        type="date" 
                                        className="input"
                                        value={tanggalAbsen}
                                        onChange={(e) => setTanggalAbsen(e.target.value)}
                                        readOnly
                                    />
                                </div>
                            </div>
                        <div className="field">
                            <label className='label'>Waktu Kehadiran</label>
                            <div className="control">
                                <input 
                                    type="time" 
                                    className="input" 
                                    value={waktuHadir}
                                    onChange={(e) => setWaktuHadir(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="field">
                                    <label className='label'>Keterangan</label>
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select
                                                value={keterangan}
                                                onChange={(e) => setKeterangan(e.target.value)}
                                            >
                                                <option value="" disabled hidden>Keterangan</option>
                                                <option value="Hadir">Hadir</option>
                                                <option value="Izin">Izin</option>
                                                <option value="Sakit">Sakit</option>
                                                <option value="Keperluan Lainnya">Keperluan Lainnya</option>
                                            </select>
                                        </div>
                                    </div>
                                 </div>
                        <div className="field">
                            <label className='label'>Bukti</label>
                            <div className="control">
                                <input 
                                    type="file" 
                                    className="input" 
                                    value={bukti}
                                    onChange={(e) => setBukti(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type='submit' className='button is-success'>Simpan</button>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddAbsen
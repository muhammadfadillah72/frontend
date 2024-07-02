import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FormAddGaji = () => {

    const [gajiPokok, setGajiPokok] = useState("");
    const [bonus, setBonus] = useState("");
    const [tanggalGaji, setTanggalGaji] = useState("");
    const [periodeGaji, setPeriodeGaji] = useState("");
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();

    const saveGaji = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/gaji', {
                gaji_pokok : parseFloat(gajiPokok),
                bonus : parseFloat(bonus),
                tanggal_gaji : tanggalGaji,
                periode_gaji : periodeGaji,
            });
            navigate("/gaji");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
  return (
    <div>
            <h1 className='title'>Gaji</h1>
            <h2 className='subtitle'>Edit Gaji</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveGaji}>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field mt-5">
                                <label className='label'>Gaji Pokok</label>
                                <div className="control">
                                    <input 
                                        type="number" 
                                        className="input" 
                                        placeholder='Gaji Pokok'
                                        value={gajiPokok}
                                        onChange={(e) => setGajiPokok(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className='label'>Bonus</label>
                                <div className="control">
                                    <input 
                                        type="number" 
                                        className="input" 
                                        placeholder='Bonus'
                                        value={bonus}
                                        onChange={(e) => setBonus(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                            <label className='label'>Tanggal Gaji</label>
                            <div className="control">
                                <input 
                                    type="date" 
                                    value={tanggalGaji}
                                    onChange={(e) => setTanggalGaji(e.target.value)}
                                />
                            </div>
                        </div>
                            <div className="field">
                                <label className='label'>Periode Gaji</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Periode Gaji'
                                        value={periodeGaji}
                                        onChange={(e) => setPeriodeGaji(e.target.value)}
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

export default FormAddGaji
import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const Gajiuser = () => {
  const [gaji, setGaji] = useState("");  
  const [gajiPokok, setGajiPokok] = useState("");
    const [bonus, setBonus] = useState("");
    // const [tanggalGaji, setTanggalGaji] = useState("");
    // const [periodeGaji, setPeriodeGaji] = useState("");
    // const [totalGaji, setTotalGaji] = useState("");
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      const getGajiById = async () => {
          try {
              const response =  await axios.get(`http://localhost:5000/gaji/${id}`);
              setGaji(response.data);
              setGajiPokok(response.data.gaji_pokok);
              setBonus(response.data.bonus);
              // setTanggalGaji(moment(response.data.tanggal_gaji).format('DD-MM-YYYY'));
              // setPeriodeGaji(response.data.periode_gaji);
              // setTotalGaji(response.data.total_gaji)
          } catch (error) {
              if (error.response) {
                  setMsg(error.response.data.msg);
              }
          }
      };
      getGajiById();
  }, [id]);

  return (
    <div>
        <div className="tile is-parent">
        <div className="card tile is-child">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon"><i className="mdi mdi-account default"></i></span>
                Gaji
            </p>
          </header>
          <div className="card-content">
            <div className="field">
              <label className="label">Gaji Pokok</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={gajiPokok.gaji_pokok} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Bonus</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={bonus.bonus} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Gaji</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={gaji.tanggal_gaji} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Periode Gaji</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={gaji.periode_gaji} className="input is-static"/>
              </div>
            </div>
             <div className="field">
              <label className="label">Total Gaji</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={gaji.total_gaji} className="input is-static"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gajiuser
import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditEmployee = () => {
    const [nip, setNip] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [tempatLahit, setTempatLahir] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [jenisKelamin,setJenisKelamin] = useState("");
    const [number,setNumber] = useState("");
    const [alamat,setAlamat] = useState("");
    const [agama,setAgama] = useState("");
    const [setatus,setSetatus] = useState("");
    const [jabatan,setJabatan] = useState("");
    const [foto, setFoto] = useState(null);
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getEmployeeById = async () => {
            try {
                const response =  await axios.get(`http://localhost:5000/employee/${id}`);
                setNip(response.data.nip);
                setNamaLengkap(response.data.nama_lengkap);
                setTempatLahir(response.data.tempat_lahir);
                setTanggalLahir(response.data.tanggal_lahir);
                setJenisKelamin(response.data.jenis_kelamin);
                setNumber(response.data.no_telepon);
                setAlamat(response.data.alamat);
                setAgama(response.data.agama);
                setSetatus(response.data.setatus);
                setJabatan(response.data.jabatan);
                setFoto(response.data.foto);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getEmployeeById();
    }, [id]);

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/employee', {
                nip : nip,
                nama_lengkap : namaLengkap,
                tempat_lahir : tempatLahit,
                tanggal_lahir : tanggalLahir,
                jenis_kelamin : jenisKelamin,
                no_telepon : number,
                alamat : alamat,
                agama : agama,
                setatus : setatus,
                jabatan : jabatan,
                foto : foto
            });
            navigate("/employees");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
    <h1 className='title'>Pegawai</h1>
    <h2 className='subtitle'>Edit Pegawai</h2>
    <div className="card is-shadowless">
        {data&&data.id&&<div>{data.id}</div>}
        
        <div className="card-content">
            <div className="content">
                <form onSubmit={updateEmployee}>
                    <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                            <label className='label'>NIP</label>
                            <div className="control">
                                <input 
                                    type="number" 
                                    className="input" 
                                    placeholder='Masukkan NIP'
                                    value={nip}
                                    onChange={(e) => setNip(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Nama Lengkap</label>
                            <div className="control">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder='Nama Lengkap'
                                    value={namaLengkap}
                                    onChange={(e) => setNamaLengkap(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Tempat Lahir</label>
                            <div className="control">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder='Tempat Lahir'
                                    value={tempatLahit}
                                    onChange={(e) => setTempatLahir(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Tanggal Lahir</label>
                            <div className="control">
                                <input 
                                    type="date" 
                                    value={tanggalLahir}
                                    onChange={(e) => setTanggalLahir(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Jenis Kelamin</label>
                                <div className="field has-check is-horizontal">
                                        <div className="field-body">
                                            <div className="field">
                                            <div className="field is-grouped-multiline is-grouped">
                                                <div className="control"><label className="b-radio radio">
                                                    <input 
                                                        type="radio" 
                                                        className="sample-radio" 
                                                        value="Laki-laki"
                                                        checked={jenisKelamin === "Laki-laki"}
                                                        onChange={(e) => setJenisKelamin(e.target.value)}
                                                    />
                                                <span className="check"></span>
                                                <span className="control-label"> Laki-laki</span>
                                                </label></div>
                                                <div className="control"><label className="b-radio radio">
                                                    <input 
                                                        type="radio" 
                                                        className="sample-radio" 
                                                        value="Perempuan"
                                                        checked={jenisKelamin === "Perempuan"}
                                                        onChange={(e) => setJenisKelamin(e.target.value)}
                                                    />
                                                <span className="check"></span>
                                                <span className="control-label"> Perempuan</span>
                                                </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                
                        </div>
                        <div className="field">
                            <label className='label'>No Telepon</label>
                            <div className="control">
                                <input 
                                    type="number" 
                                    className="input" 
                                    placeholder='No Telepon'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Alamat</label>
                            <div className="control">
                                <input 
                                    type="textarea" 
                                    className="input" 
                                    placeholder='No Telepon'
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                />
                            </div>
                        </div>
                       
                            <div className="field">
                                <label className='label'>Agama</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select
                                            value={agama}
                                            onChange={(e) => setAgama(e.target.value)}
                                        >
                                            <option value="Islam">Islam</option>
                                            <option value="Kristen">Kristen</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Buddha">Buddha</option>
                                            <option value="Katolik">Katolik</option>
                                            <option value="Konghucu">Konghucu</option>
                                        </select>
                                    </div>
                                </div>
                             </div>
                             <div className="field mt-5">
                                <label className='label'>Status</label>
                                    <div className="control">
                                        <input 
                                            type="text" 
                                            className="input" 
                                            placeholder='Status'
                                            value={setatus}
                                            onChange={(e) => setSetatus(e.target.value)}
                                        />
                                    </div>
                            </div>
                            <div className="field">
                                <label className='label'>Jabatan</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select
                                            value={jabatan}
                                            onChange={(e) => setJabatan(e.target.value)}
                                        >
                                            <option value="Kepala Sekolah">Kepala Sekolah</option>
                                            <option value="Guru">Guru</option>
                                            <option value="Karyawan">Karyawan</option>
                                        </select>
                                    </div>
                                </div>
                             </div>
                        <div className="field">
                            <label className='label'>Foto</label>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="field file">
                                            <label className="upload control">
                                            <a className="button is-primary">
                                                <span className="icon"><i className="mdi mdi-upload"></i></span>
                                                    <span>Pick a file</span>
                                            </a>
                                                <input 
                                                    type="file" 
                                                    id="input-file"
                                                    
                                                    onChange={(e) => setFoto(e.target.files[0])} 
                                                    // style={{opacity: 0}}
                                                    />
                                            </label>
                                        </div>
                                    </div>
                                </div> 
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type='submit' className='button is-success'>Update</button>    
                            </div>
                        </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default FormEditEmployee
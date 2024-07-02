import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    };

    const deleteUser = async (userId) => {
        await axios.delete (`http://localhost:5000/user/${userId}`);
        getUser();
    }

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>List of users</h2>
        <Link to="/user/add" className='button is-primary mb-2'>
         Add new
        </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Usernama</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user, index) => (
                <tr key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                    <td>
                        <Link to={`/user/edit/${user.uuid}`}
                        className='button is-small is-info'>
                            Edit
                        </Link>
                        <button 
                        onClick={() => deleteUser(user.uuid)}
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

export default UserList
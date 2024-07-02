import React, {useEffect} from 'react'
import Layout from './Layout'
import FormEditAbsen from '../components/FormEditAbsen'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const EditAbsen = () => {
  return (
    <Layout>
        <FormEditAbsen />
    </Layout>
  )
}

export default EditAbsen
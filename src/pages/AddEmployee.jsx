import React,{useEffect} from 'react'
import Layout from './Layout'
import FormAddEmployee from '../components/FormAddEmployee'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError ,navigate]);
  return (
    <Layout>
        <FormAddEmployee />
    </Layout>
  )
}

export default AddEmployee
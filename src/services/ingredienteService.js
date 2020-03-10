import axios from 'axios';

export default function ingredienteService(){
  
  const INGREDIENTES_END_POINT = 'http://localhost:8080/ingrediente';
  const GET_ALL_ENDPOINT = '/';
  const INSERT_ENDPOINT = '/insert';
  const DELETE_ENDPOINT = '/delete';
  const PUT_ENDPOINT = '/put';

  const getAll = ()  => {
    return axios.get(`${INGREDIENTES_END_POINT + GET_ALL_ENDPOINT}`);
  };

  const getById = (id) => {
    return axios.get(`${INGREDIENTES_END_POINT + GET_ALL_ENDPOINT}?id=${id}`);
  };

  const insert = (ingrediente) => {
    return axios.post(`${INGREDIENTES_END_POINT + INSERT_ENDPOINT}`, ingrediente);
  };

  const deleteById = (id) => {
    return axios.delete(`${INGREDIENTES_END_POINT + DELETE_ENDPOINT}?id=${id}`);
  };

  const put = (ingrediente) => {
    return axios.put(`${INGREDIENTES_END_POINT + PUT_ENDPOINT}`, ingrediente);
  };

  return {
    getAll,
    getById,
    insert,
    deleteById,
    put,
  };
}
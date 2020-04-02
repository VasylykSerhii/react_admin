import axios from 'axios';

const _apiConfiguration = 'http://avesomeshop-001-site1.htempurl.com/api/portal-parameters'

export const fetchConfiguration = async () => {
  return axios.get(_apiConfiguration)
  .then(res => {

    return res.data
  })
}


export const updateConfiguration = async (id,value) => {
  return axios.put(`${_apiConfiguration}/${id}`, {
    value: value,
  })
  .then(res => {
    return res.data
  })
}

export const deleteConfiguration = async (id) => {
  return axios.delete(`${_apiConfiguration}/${id}`)
  .then(res => {
    return res.data
  })
}

export const createConfiguration = async (value, key) => {
  return axios.post(`${_apiConfiguration}`, {
    value,
    key
  })
  .then(res => {
    return res.data
  })
}

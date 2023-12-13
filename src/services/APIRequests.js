import axios from "axios"
import { getToken } from "./Auth"
import { getCurrentDatapool } from "./Datapools";

const Server = 'http://localhost:5000/api/'//'http://167.86.98.171:6001/api/'

export const LOGIN_REQUEST_API = (username, password, datapoolId) => {

  return axios.post(`${Server}Account/Login` , {
      username,
      password,
      datapoolId
  }).then(res => res)
  .catch(error => error)
}

//HTTP GET
export const GET_REQUEST_API = (Path, Value = null, withDatapool, DPAware) => {
    const Route = `${Server}${Path}`
    const token = getToken()

    let url = Route

    if(DPAware){
      url = Route.replace('api', 'apidpaware')
    }

    if(Value) url += `/${Value}`

    if(withDatapool) {
      const data_pool_id = getCurrentDatapool()
      url += `/${data_pool_id}`
    }

    return axios.get(url,
      {
        headers: {
            'Authorization': token ? 'bearer ' + token : ''
          }
      })
    .then(res => res)
    .catch(error => error)
 }

 export const GET_REQUEST_BODY_API = (Path, Body, withDatapool, DPAware) => {
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route
  let DatapoolId = null

  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  if(withDatapool) {
    DatapoolId = getCurrentDatapool()
  }

  return axios.post(url,
    {
      ...Body,
      DatapoolId
    },
    {
      headers: {
          'Authorization': token ? 'bearer ' + token : ''
        }
    })
    .then(res => res)
    .catch(error => error)
}

//HTTP POST
export const ADD_REQUEST_BODY_API = (Path, Body, withDatapool, DPAware) => {
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route
  let DatapoolId = getCurrentDatapool()
     
  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  if(withDatapool) {
  }
  
  return axios.post(url,
    {
      ...Body,
      DatapoolId
    },
    {
      headers: {
          'Authorization': token ? 'bearer ' + token : ''
        }
    })
    .then(res => res)
    .catch(error => error)
}

export const ADD_REQUEST_FILE_API = (Path, FileData, withDatapool, DPAware) => {
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route
  let DatapoolId = getCurrentDatapool()

  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  if(withDatapool || DPAware) {
    FileData.append('DataPoolId', DatapoolId)
  }


  return axios.post(url, 
      FileData,
      {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': token ? 'bearer ' + token : ''
            }
        })
        .then(res => res)
        .catch(error => error)

}

//HTTP PUT
export const EDIT_REQUEST_BODY_API = (Path, Body, withDatapool, DPAware) => {
  console.log(Body)
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route

  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  let DatapoolId = null

  if(withDatapool || DPAware) {
    DatapoolId = getCurrentDatapool()
  }
  
  return axios.put(url,
    {
      ...Body,
      DatapoolId
    },
    {
      headers: {
          'Authorization': token ? 'bearer ' + token : ''
        }
    })
    .then(res => res)
    .catch(error => error)
}

export const EDIT_REQUEST_FILE_API = (Path, FileData, withDatapool, DPAware) => {
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route

  let DatapoolId = getCurrentDatapool()

  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  if(withDatapool || DPAware){
    FileData.append('DataPoolId', DatapoolId)
  }

  return axios.put(url, 
      FileData,
      {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': token ? 'bearer ' + token : ''
            }
        })
        .then(res => res)
        .catch(error => error)

}

//HTTP DELETE
export const DELETE_REQUEST_API = (Path, Value, withDatapool, DPAware) => {
  const Route = `${Server}${Path}`
  const token = getToken()

  let url = Route

  if(DPAware){
    url = Route.replace('api', 'apidpaware')
  }

  if(Value) url += `/${Value}`

  if(withDatapool) {
    const data_pool_id = getCurrentDatapool()
    url += `/${data_pool_id}`
  }
  
  return axios.delete(url,
    {
      headers: {
          'Authorization': token ? 'bearer ' + token : ''
        }
    })
    .then(res => res)
    .catch(error => error)
}

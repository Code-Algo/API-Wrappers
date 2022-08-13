
const endpoint = '/api/User'

const post = async (token, user, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, {name: user})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const put = async (token, user, id, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name: user})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const del = async (token, id, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id)
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}
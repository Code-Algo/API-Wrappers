
const endpoint = '/api/question'

const post = async (token, question, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, {name: question})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const put = async (token, id, question, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name: question})
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
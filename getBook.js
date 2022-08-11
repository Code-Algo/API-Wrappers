const get = async (cancelToken) =>{
    let error
    let book

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        book = response.data.book
    }else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error,
        book
    }
}
import { useEffect, useState, useCallback} from "react"

async function sendHttpRequest(url, config){
    const response = await fetch(url, config)

    const resData = await response.json()

    if(!response.ok){
        throw new Error(
            resData.message || "something went wrong, please try again"
        )
    }

    return resData
}

export default function useHttps(url, config, initialData){ 

    const [data, setData] = useState(initialData)
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState('')


    // useCallback because trying to avoid infinite loop because we update state, and this function is dependency of sendRequest
    const sendRequest = useCallback(async function sendRequest(){

        setIsloading(true)

        try {
            const resdata = await sendHttpRequest(url, config)
            setData(resdata)
        } catch (error){
            setError(error.message || "Something went wrong")
        }

        setIsloading(false)
        
    },[url, config])


    useEffect(()=>{

        // because we have two kind of reqesu
        // 1. constantly get, therefore, executing all the time,
        // 2. the post which will only get executed occasiaonlly
        // for the other, can directly access and execute whenever they wants

        if((config && (config.method === 'GET' || !config.method)) || !config){

            sendRequest()

        }
        

    },[sendRequest, config])

    

    return{
        data,
        isLoading,
        error,
        sendRequest
    }

}
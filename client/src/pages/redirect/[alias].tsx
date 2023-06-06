import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

type Props = {}

const AliasPage = (props: Props) => {

    const router = useRouter()
    const { alias } = router.query

    useEffect(() => {
        if (alias){
            const instance = axios.create({
                withCredentials: true,
                baseURL: 'http://localhost:4001/api'
             })
            instance.get(
                '/url',
                {
                    params: { identifier: alias },
                    withCredentials: true
                })
            .then(function (res) {
                window.location.replace(res.data.url);
                alert('Successfully get url!');  
            })
            .catch(function (res) {
                console.log(res)
            });
        }
    }, [alias])

    return (
        <></>
  )
}

export default AliasPage
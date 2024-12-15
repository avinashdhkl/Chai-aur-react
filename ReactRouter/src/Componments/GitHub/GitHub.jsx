import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const link = 'https://api.github.com/users/avinashdhkl';

    //     fetch(link, { mode: "cors" })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("resp", data);
    //             setData(data)
    //         })


    // }, [])
    // console.log("data", data);

    const data = useLoaderData();
  
    return (
        <>
            <div className='bg-gray-300 text-center text-black text-3xl p-4 m-4'>
                <div className='flex-col'>
                    Git followers:{data.followers ? data.followers : 0}
                    <img className='' src={data.avatar_url ? data.avatar_url : `https://avatars.githubusercontent.com/u/59153191?v=4`} width={200} height={200} />
                </div>
            </div>

        </>
    )
}

export default GitHub
import React, { useState, useEffect } from 'react'
// import { coinInfo } from '../Db'
import CoinSectionCard from './reuseables/CoinSectionCard'
import axios from 'axios'

const CoinSection = () => {
    const [coinDetail, coinDetailData] = useState([])

    const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=5'

    const getCoinData = async()=>{
        try {
            const response = await axios.get(url)
            console.log(response);
            coinDetailData(response.data.data)
        } catch (error) {
            console.error('Error in fetching data', error)
        }
    }

    useEffect(()=>{
        getCoinData()
    },[])

    console.log(coinDetail);
    

  return (
    <div className='bg-[#EDE9EF] w-full px-6 md:px-10 py-3 border-0 lg:border lg:border-[#C5C0C0]  shadow-md' >
            <div className='grid grid-cols-1 lg:grid-cols-5 w-full'>
                {coinDetail.map((token) => (
                    <div key={token.id}>
                        <CoinSectionCard coin={token} />
                    </div>
                ))}
            </div>
    </div>
  )
}

export default CoinSection
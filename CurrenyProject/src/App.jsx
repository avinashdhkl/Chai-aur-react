import { useState } from 'react'
import { Input } from './Components';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import Exchange from '../public/img/Exchange.webp'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('NPR')
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);
  // console.log('currencyInfo',currencyInfo)
  // console.log('options',options)

  const swap = () => {
    
    setFrom(to)
    setTo(from)
    setAmount(convertAmount)
    setConvertAmount(amount)
  }

  const convert = () => {
  //  console.log("amount",amount)
  //  console.log("currencyInfo",currencyInfo)
    setConvertAmount(amount * currencyInfo[to])
  }

  return (

    <>
      <div className='w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat px-2 py-20' style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/various-foreign-currency-technology-background-600nw-2429470883.jpg')` }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 gap-y-'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>

              <div className='w-full mb-2'>
                <Input label='From'
                  currenyList={options}
                  selectCurrency={from}
                  amount={amount}
                  onCurrencyChange={(curreny) => setFrom(curreny)}
                  className={"px-3 py-2"}
                  onAmounChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={ swap}
                >
                  Swap
                </button>
              </div>
              <div className='w-full mb-1'>
                <Input label='To' 
                currenyList={options} 
                selectCurrency={to} 
                amount={convertAmount} 
                onCurrencyChange={(curreny) => setTo(curreny)} 
                className={"px-3 py-2"} amountDisablled={true} />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
            </form>

          </div>

        </div>

      </div>

    </>


  )
}

export default App

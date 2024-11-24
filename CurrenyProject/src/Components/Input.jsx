import { useState, useId } from 'react'

function Input({ label = "",
  amount,
  currenyList = [],
  onAmounChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisablled = false,
  currencyDisabled = false,


  className = "" }) {
  const amountInputId = useId();
  
  return (
    <>
      <div className={`bg-white  p3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
          <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'> {label}</label>
          <input
            className='outline-none w-full bg-transparent py-1.5'
            type='text'
            placeholder='Amount'
            disabled={amountDisablled}
            value={amount}
            min={0}
            onChange={(e) => onAmounChange && onAmounChange(Number(e.target.value))}

          />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
          <p className='text-black/40 mb-2 w-full'>Currency Type</p>
          <select className='rounded-lg px-1 py-1 bg-gray-100  w-1/2 cursor-pointer outline-none' 
          id={amountInputId}
          disabled={currencyDisabled} 
          value={selectCurrency}          
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}          
          >      
    
            {
             currenyList &&  currenyList.map((curreny) => (
              
             
              
              <option value={curreny}>{curreny}</option>
                  
                
              ))
            }

          </select>

        </div>

      </div>
    </>

  )
}

export default Input
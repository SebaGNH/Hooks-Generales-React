import React,{useState,useEffect} from 'react'
import {useFetch,useCounter} from '../hooks'
import {LoadingQuote,LoadedQuote} from './'

const MultipleCustomHooks = () => {
  const { counter, incrementar, decrementar, resetear } = useCounter(1);
  const url = `https://breakingbadapi.com/api/quotes/${counter}`;
  const {data, isLoading,hasError} = useFetch(url);
  const {author,quote}  = !!data && data[0];
  

  return (
    <>
      <h3>Breaking Bad Quotes</h3>

      {
      isLoading
      ? <LoadingQuote />
      : <LoadedQuote 
          author={author}
          quote={quote}
        />
      }

      <button 
        className="btn btn-primary"  
        onClick={()=>incrementar()}
        disabled={isLoading}
        >Next Quote</button> 
      <button className="btn btn-primary" onClick={()=>resetear()}>Reset Quote</button> 
      <button className="btn btn-primary" onClick={()=>decrementar(1,1)}>Decrement Quote</button> 
    </>
  )
}

export default MultipleCustomHooks
import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';


const MultipleCustomHooks = () => {
  const { counter, incrementar, decrementar, resetear } = useCounter(1);
  const url = `https://breakingbadapi.com/api/quotes/${counter}`;
  const {data, isLoading,hasError} = useFetch(url);
  const {author,quote}  = !!data && data[0];
  

  return (
    <>
      <h3>Breaking Bad Quotes</h3>

      {
      isLoading?
        <div className="alert alert-info text-center">
          Loading...
        </div>
        :
        <blockquote className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      }

      <button 
        className="btn btn-primary"  
        onClick={()=>incrementar()}
        disabled={isLoading}
        >Next Quote</button> 
      <button className="btn btn-primary" onClick={()=>resetear()}>Reset Quote</button> 
      <button className="btn btn-primary" onClick={()=>decrementar()}>Decrement Quote</button> 
    </>
  )
}

export default MultipleCustomHooks
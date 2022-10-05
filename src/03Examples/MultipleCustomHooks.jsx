import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch';

const url = `https://breakingbadapi.com/api/quotes/1`;

const MultipleCustomHooks = () => {

  const {data, isLoading,hasError} = useFetch(url);

  const {author,quote}  = !!data && data[0];
  
//console.log(data)
//console.log(isLoading)
 /*  console.log(data) */


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
    </>
  )
}

export default MultipleCustomHooks
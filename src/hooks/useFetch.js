import React,{useState,useEffect} from 'react'

const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    //Carga estados previos y cambio isLoading a true
    setState({
      ...state,
      isLoading: true
    });

    //Fetch
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data)
    setState(
      {
        data,
        isLoading: false,
        hasError: null
      }      
    )
  }


  //Use Effect - Cada vez que cambie el Url hace el fetch
  useEffect( () => {
    getFetch();
  },[url]);

  //console.log(state)

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
  
}

export default useFetch
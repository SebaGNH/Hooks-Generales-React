
const [dataApi, setDataApi] = useState({})


  useEffect(() => {

    const llamadoAPI = async () => {
      const url = `https://breakingbadapi.com/api/quotes/1`;
      const response = await fetch(url);
      const data = await response.json();
      
      setDataApi(data[0])
    }
    llamadoAPI();
  },[]);

  console.log(dataApi.quote)
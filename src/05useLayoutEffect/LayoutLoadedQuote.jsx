import React, {useState,useRef,useLayoutEffect} from 'react'


const LayoutLoadedQuote = ({quote,author}) => {
  const [boxSize, setBoxSize] = useState(
    {
      width: 0,
      height: 0
    }
  )

  const parRef = useRef();

  useLayoutEffect(() => {
    //console.log(parRef.current.getBoundingClientRect())
    const {width,height}  = parRef.current.getBoundingClientRect();
    setBoxSize({width,height});
  
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display:'flex'}}
        >
        <p 
          className="mb-2"
          ref={parRef}
        >{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
        <code>{JSON.stringify(boxSize)}</code>
      </blockquote>
    </>
  )
}

export default LayoutLoadedQuote
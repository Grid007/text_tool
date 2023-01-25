import React,{ useRef, useState } from 'react'

export default function Textutils(props) {

  const [text, setText] = useState("");
  

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };
  const clearHandler=()=>{
    setText("");
  }
  const gotoUpper=()=>{
    let newtexts=text.toUpperCase();
    setText(newtexts);
  }

  const gotoLower=()=>{
    let newtexts=text.toLowerCase();
    setText(newtexts);
  }
  
  const onChanging=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  
  return(
  <>
    <div style={{color:props.mode=='light'?'black':'white'}} className='container my-4'>
    <h3>Enter text here:</h3>
    
    <div className="mb-3">
      <textarea class="form-control" value={text} style={{backgroundColor:props.mode=='light'?'white':'#282626',color:props.mode=='light'?'black':'white'}} ref={textAreaRef} onChange={onChanging} id="exampleFormControlTextarea1" rows="7"></textarea>  
    </div>
      <button className='btn btn-primary' onClick={gotoUpper}>Uppercase</button><button className='btn btn-primary ms-3' onClick={gotoLower}>Lowercase</button><button className='btn btn-primary ms-3' onClick={clearHandler}>Clear text</button><button className='btn btn-primary ms-3' onClick={copyToClipboard}>Copy text</button>
  <div className='container'>
      <h3 className='my-4'>Your text summary</h3>
        <p >{text.split(' ').filter ((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    
      <h3 className="my-4">Preview</h3>
      <div>{text}</div>
</div>  
    </div>
  </>
    
  )
}
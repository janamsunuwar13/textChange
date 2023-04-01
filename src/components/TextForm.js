import React, {useState} from 'react'

export default function TextForm(props) {
    //for present when button is clicked
    const handleUpClick = () => {
        console.log('convettouppercase is clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Convert to Upper case', 'success')
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Convert to lower case', 'success');
    }
    const handleCleanText = () => {
      let newText = "";
      setText(newText);
      props.showAlert('clear the box', 'success');
    }
    //used when there is changed in textarea and by the help of event we can change the text area
    const handleOnChange = (event) => {
        console.log('onChange')
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("tero bau");
  return (
    <>
  <div className = "container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',
     color: props.mode === 'dark'? 'white':'black'}}  id="myBox" rows="8" ></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleCleanText}>clean Text</button>
</div>
  <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
    <h1>Your Text Summary </h1>
    <h5>{text.split(" ").length} words and {text.length} characters</h5>
    <h5>You can read this text in {0.008*text.split(" ").length} minutes</h5>
    <h2>Preview</h2>
    <h5>{text.length>0?text :"Enter in a box to review here"}</h5>
  </div>
  </>
  )
}

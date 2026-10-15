import {useState} from "react";
function App(){
  const [name,setname]=useState("");
  const[email,setemail]=useState("");
  const [file,setfile]=useState("");
  const[role,setrole]=useState("");
  function submit(){
if(name===""||email===""){
  alert('All field required');
}
else if(!email.includes('@')){
  alert('Email invalid')
}
else{alert('form submitted');}
  }
  return(
    <>
    <h1>Job Application Form</h1>
    <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setname(e.target.value)}required/>
<br /><br />
    <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} /> <br /><br />
    <input type="file" value={file} onChange={(e)=>setfile(e.target.value)} placeholder="Upload file"/><br /><br />
    <select value={role} onChange={(e)=>setrole(e.target.value)}>
      <option value="Developer">Software Developer</option>
      <option value="Designer">Web Designer</option>
      <option value="Engineer">Software Enginner</option>
    </select>
        <h4>Accept</h4><input type="checkbox" placeholder="Accept"/>
        <h4>Allow</h4><input type="checkbox" placeholder="Allow"/>
        <br /><br />
        <button onClick={submit}>Submit</button>
    </>
  );
}
export default App;
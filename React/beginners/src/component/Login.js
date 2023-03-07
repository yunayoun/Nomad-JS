import React, { useEffect, useState } from "react";

//dummy
const User = {
  email : 'test@test.com',
  pw : 'test1234!!!'
}

export default function Login(){
const [email,setEmail] = useState('');
const [pw,setPw] = useState('');
const [emailValid,setEmailValid] = useState(false)
const [pwValid,setPwValid] = useState(false);
const [notAllow,setNotAllow] = useState(true);//비활성화

const handleEmail=(e)=>{
  setEmail(e.target.value);
  const regex = 
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if(regex.test(email)){
    setEmailValid(true);
  }else{
    setEmailValid(false);
  }}
const handlePw=(e)=>{
  setPw(e.target.value);
  const regex = 
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
  if(regex.test(pw)){
    setPwValid(true);
  }else{
    setPwValid(false);
  }}
  const clickConfirm = ()=>{
    if(email == User.email && pw === User.pw){
      alert('로그인 성공');
    }else{
      alert('실패,다시해주세요');
    }
  }


useEffect(()=>{
if(emailValid && pwValid === true){
  setNotAllow(false);//활성화시킴
  return;
}
  setNotAllow(true);
},[emailValid,pwValid])


return(
  <>
  <div className='page'>
    <div className="titleWrap">
      이메일과 비밀번호를 
      <br/>입력해줘
    </div>
    <div className="contentWrap">
      <div className='inputTitle'>이메일주소</div>
      <div className='inputWrap'>
        <input 
          type='text'
          className ='input'
          value={email}
          onChange={handleEmail}
          ></input>
      </div>
      <div className="errMessage">
        {
          !emailValid && email.length>0 &&(
            <div> 올바른이메일을입력해주세요</div>
        )}
      </div>

      <div className='inputTitle'>비밀번호</div>
      <div className='inputWrap'>
        <input
          type='password'
          className = 'input'
          value={pw}
          onChange={handlePw}
          ></input>
      </div>
      <div className="errMessage">
      {
          !pwValid && pw.length>0 &&(
            <div>맞게 입력해주세요</div>//valid가아니거나 pw한글자라도있으면
        )}
      </div>
    </div> 
      <div>
        <button onClick={clickConfirm} disabled={notAllow} className="bottomBtn">버튼</button>
      </div>
  </div>
  </>
)}
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>회원가입</h1>
    <form>
      <input required type="text" placeholder='아이디'/>
      <input required type="emalil" placeholder='이메일'/>
      <input required type="password" placeholder='비밀번호'/>
      <button>회원가입</button>
      <p>잘못된 정보 입니다.</p>
      <span>계정이 없으시간요? <Link to="/login">회원가입</Link>
    </span>
    </form>
    </div>
  )
}

export default Register
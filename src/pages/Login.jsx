import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
    <form>
      <input required type="text" placeholder='아이디'/>
      <input required type="password" placeholder='비밀번호'/>
      <button>로그인</button>
      <p>잘못된 정보 입니다.</p>
      <span>계정이 없으시간요? <Link to="/registr">가입하기</Link>
    </span>
    </form>
    </div>
  )
}

export default Login
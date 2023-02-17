import React from 'react'
import { Movie } from '../typings'

interface Props {

}
const SignIn = ({}: Props) => {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder='Email or Phone number'/>
        <input type="password" placeholder='Password' />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn
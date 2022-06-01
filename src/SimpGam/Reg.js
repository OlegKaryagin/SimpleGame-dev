import React from 'react';
import '../Log.css';
import axios from 'axios'




function handleSubmit(e) {
  e.preventDefault()
  const {username, password, password_2 } = e.target.elements
  console.log({username: username.value, password: password.value, password_2: password_2.value })
  // let reqInstance = axios.create(
  //   {
      
  //   }
  // )
  // let comment = reqInstance.get('http://51.250.97.189:8080/auth/signup').then((response) => {
  //   // console.log(response.data)
  //   return response.data
  // });

  const json = JSON.stringify({ login: username.value, password: password.value, password_2: password_2.value});
  console.log(json)
  const res = axios.post('http://51.250.97.189:8080/auth/signup', json,
  {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    }
  })
  console.log(res.headers)
}


const Reg = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="Log.css" />		
          <div className="autentification">
            <div className="count-1">
              <div className="flex-wrapper-twelve">
                <div className="flex-wrapper-five"><p className="font_1">W</p></div>
                <div className="flex-wrapper-six"><p className="font_1">e</p></div>
                <div className="flex-wrapper-seven"><p className="font_1">l</p></div>
                <div className="flex-wrapper-eight"><p className="font_1">l</p></div>
              </div>
              <div className="flex-wrapper-thirteen">
                <div className="flex-wrapper-one"><p className="font_1">c</p></div>
                <div className="flex-wrapper-three"><p className="font_1">o</p></div>
                <div className="flex-wrapper-four"><p className="font_1">m</p></div>
                <div className="flex-wrapper-two"><p className="font_1">e</p></div>
              </div>
            </div>
            {/* <form onSubmit={handleSubmit}>
            <div className="count-2">
              <div className="flex-wrapper-fourteen">
                <div className="flex-wrapper-eleven">
                  <p className="font_1">Login:</p>
                </div>
                <input type="text" className="rectangle-13" valueLink={this.linkState('login')}/>
              </div>
              <div className="flex-wrapper-fifteen">
                <div className="flex-wrapper-ten">
                  <p className="font_2">Password:</p>
                </div>
                <input type="text" className="rectangle-13" valueLink={this.linkState('password')} />
              </div>
              <div className="flex-wrapper-fifteen">
                <div className="flex-wrapper-ten">
                  <p className="font_2">Password Repeat:</p>
                </div>
                <input type="text" className="rectangle-13" valueLink={this.linkState('password2')} />
              </div>
            </div>
            <div className="count-3">
              <div className="flex-wrapper-nine">
              <button type="button" onClick={this.handleLogin}>Enter</button>
                  <p className="font_1">Enter</p>
                </div>
            </div>
            </form> */}
<form onSubmit={handleSubmit}>
   <input type="text" id="username"/>
   <input type="text" id="password"/>
   <input type="text" id="password_2"/>
   <input type="submit" value="Login" />
</form>
          </div>
        </div>
      );
}
      
export default Reg;
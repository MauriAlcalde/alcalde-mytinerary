import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import authActions from '../redux/actions/authActions'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const SignIn = (props) => {
    const [userLogged, setUserLogged] = useState({
      email: '',
      password: ''
    })
    const [errors, setErrors] = useState('')
    const userName = localStorage.getItem('token')
    const readInput =(e)=> {
        const value = e.target.value
        const prop = e.target.name
        setUserLogged({
          ...userLogged,
          [prop]: value
        })
      }
    const validateInfo = async () => {
      if(userLogged.email===''||userLogged.password===''){
        alert("All the fields must be filled")
        return false
      }
      setErrors([])
      const res = await props.signUser(userLogged)
      if(res && !res.success){
        setErrors(res.response)
      }
         /* props.signUser(userLogged) */
       alert(`Bienvenido!`)
      }  
    const responseGoogle = async (response)=> {
        if(response.error){
          alert('Ups, something went wrong')
        }
        const res = await props.signUser({
          email: response.profileObj.email,
          password: 'Aa'+response.profileObj.googleId,
        })
        if(res && !response.success){
          setErrors([response.errors])
        }
        alert('Bienvenido!')
      }
      
      return(
        <>
        <div className="hero-image-signup" style={{backgroundImage: "url('https://blacklinesandbillables.com/wp-content/uploads/2016/09/notepad-1280x640.jpeg')"}}>
    </div>
    <div className="borderPic"></div>
    <div className="formContainer" >
      <form className="signUpForm">
        <div className="inputIcon">
          <input className="inputForm" type="text" name="email" id="un" placeholder="Enter your email" onChange={readInput}/>
          <p>{errors &&  errors}</p>
          </div>
        <div className="inputIcon">
          <input className="inputForm" type="password" name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
          <p>{errors &&  errors}</p>
          </div>
      </form>
      <button className="createAcc" onClick={()=>validateInfo()}>Sign In</button>
      <div className="cajaGoogle">
          <Link to="/signup"><h5>You don't have an account? Sign Up!</h5></Link>
          <GoogleLogin className="googleBtn"
          clientId="547248483540-a1aab858936kt0u19mi5su1qr68qr7mf.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
         </div>
    </div>
        </>
      ) 
}
const mapStateToProps = state => {
    return {
      loggedUser: state.authR.loggedUser,
      userName: state.authR.userName
    }
  }
  
  const mapDispatchToProps = {
    signUser: authActions.signIn
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
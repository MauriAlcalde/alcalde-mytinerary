import { useEffect, useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import authActions from "../redux/actions/authActions"
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const SignUp = (props) => {
    const [countries, setCountries] = useState([])
    const [newUser, setNewUser] = useState({
      name: '', lastname: '', email: '', userName: '', password: '', userImage: '', country: ''
    })
    const [errors, setErrors] = useState({})
    const errorsInput = {
      name: null, lastname: null, email: null, userName: null, password: null, userImage: null, country: null
    }
  
    const readInput =(e)=> {
      const value = e.target.value
      const prop = e.target.name
      setNewUser({
        ...newUser,
        [prop]: value
      })
    }
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all/')
        .then(response => setCountries(response.data))
      },[])

    const validateInfo = async () => {
        if(newUser.name === '' || newUser.lastname === '' || newUser.email === '' 
        || newUser.userName === '' || newUser.password === '' 
        || newUser.userImage === '' || newUser.country === ''){
          alert("All the fields can't be empty")
        }
    const response = await props.createUser(newUser)
        if(response && !response.success){
          response.errors.map(error=> {
            errorsInput[error.context.label]=error.message
            return false
          })
          setErrors(errorsInput)
        }else {
          alert('Usuario Creado!')
        }
      }

    const responseGoogle =async (response)=> {
        if(response.error){
          alert('Ups, something went wrong')
        }
    const res = await props.createUser({
          userName: response.profileObj.givenName,
          email: response.profileObj.email,
          name: response.profileObj.givenName,
          lastname: response.profileObj.familyName,
          userImage: response.profileObj.imageUrl,
          password: 'Aa'+response.profileObj.googleId,
          country: 'Argentina'
        })
        if(res && !response.success){
          alert(res.errors[0].message)
          return false
        }
        alert('Usuario Creado!')
      }
      return(
        <>
        <div className="hero-image-signup" style={{backgroundImage: "url('https://blacklinesandbillables.com/wp-content/uploads/2016/09/notepad-1280x640.jpeg')"}}>
        </div>
        <div className="borderPic"></div>
        <div className="formContainer" >
          <form className="signUpForm">
            <div className="inputIcon">
              <input className="inputForm" type="text" name="name" id="fn" placeholder="Enter your first name" onChange={readInput}/>
              {errors.name && <p>{errors.name}</p>}
              </div>
            <div className="inputIcon">
              
              <input className="inputForm" type="text" name="lastname" id="ln" placeholder="Enter your last name" onChange={readInput}/>
              {errors.lastname && <p>{errors.lastname}</p>}
              </div>
            <div className="inputIcon">
             
              <input className="inputForm" type="text" name="email" id="em" placeholder="Enter your email" onChange={readInput}/>
              {errors.email && <p>{errors.email}</p>}
              </div>
            <div className="inputIcon">
              
              <input className="inputForm" type="text" name="userName" id="un" placeholder="Enter your Username" onChange={readInput}/>
              {errors.userName && <p>{errors.userName}</p>}
              </div>
            <div className="inputIcon">
              
              <input className="inputForm" type="password" name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
              {errors.password && <p>{errors.password}</p>}
              </div>
            <div className="inputIcon">
              
              <input className="inputForm" type="text" name="userImage" id="img" placeholder="Enter an url img" onChange={readInput}/>
              {errors.userImage && <p>{errors.userImage}</p>}
              </div>
            <div className="inputIcon">
            
              <select style={{textAlignLast: 'center'}} className="inputForm" name="country" id="country" onChange={readInput}>
              {errors.country && <p>{errors.country}</p>}
                <option value="choose" disabled selected >Choose your country</option>
                {countries.map(country => <option value={country.name}>{country.name}</option>)}
              </select>
              
            </div>
          </form>
          <button className="createAcc" onClick={()=>validateInfo()}>Create Account</button>
        </div>
        <Link to="/login"><h5>You already have an account? Log In!</h5></Link>
        <GoogleLogin className="googleBtn"
            clientId="547248483540-a1aab858936kt0u19mi5su1qr68qr7mf.apps.googleusercontent.com"
            buttonText="Create Account with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </>
      )
    }

    const mapStateToProps = state => {
        return {
        loggedUser: state.authR.loggedUser
        }
      }
      
      const mapDispatchToProps = {
        createUser: authActions.createUser
      }
      
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
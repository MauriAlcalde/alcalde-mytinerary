import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if(props.loggedUser){
    var links = 
    <>
      <NavItem>
        <Link to="/logIn" className="signupBtn" onClick={()=> props.signOut()}>SignOut</Link>
      </NavItem>
    </>
  }else {
    var links = 
    <>
      <NavItem>
        <Link to="/signUp" className="signupBtn">SignUp</Link>
      </NavItem>
      <NavItem>
        <Link to="/logIn" className="loginBtn">SignIn</Link>
      </NavItem>
    </>
  }

  return (
    <div className="Nav">
      <Navbar color="transparent" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>   
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/cities">Cities</Link>    
            </NavItem>
            {links}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedUser: state.authR.loggedUser
  }
}

const mapDispatchToProps = {
  signOut: authActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)
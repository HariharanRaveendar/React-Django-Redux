import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
    render() {
      const { isAuthenticated, user } = this.props.auth;

      const authLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item me-2">
            <Link to="/dashboard" className="nav-link btn btn-success  btn-sm text-light">
              DashBoard
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
              Logout
            </button>
          </li>
        </ul>
      );

      const guestLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item btn btn-primary btn-sm text-light">

            <Link to="/login" className="nav-link btn-primary btn-sm text-light">
              Login
            </Link>
          </li>
        </ul>
      );
      
        return (
          <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
              <Container>
                  <Navbar.Brand href="/"><span style={{ fontWeight: 700, color: '#FF1D5F', paddingRight: '1em' }}>BLOGSPOT</span>&#124; {user ? `Welcome ${user.username}` : ''}</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                      <Nav>
                      {isAuthenticated ? authLinks : guestLinks}
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </>
        );
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps,{logout})(Header);

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import './home.css'
import data from '../../components/utils/data';

function Home() {
  //Hooks
  let navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loggedIn, setloggedIn] = useState(false)
  const [error, seterror] = useState(null)
  const [loginError, setloginError] = useState(null)
  const [loading, setloading] = useState(false)



  //Functons
  const login = () => {
    seterror(null)
    setloading(true)
    setloginError(null)

    setTimeout(() => {
      if(validate()) {
        data.find((user) => {
          if(user.email === email && user.password === password) {
            setloggedIn(true)
            navigate('/deposit')
            return user;
          } else {
            setloginError("Incorrect Credentials")
          }
        })
      }
      setloading(false)
      
    }, 2000);

  }

  const validate = () => {
    let value = true;

    if(!email || !password) {
      seterror('Field missing')
      value = false;
    }

    return value;
  }
  return (
    <>
    <Navbar />
    <section className="section bg-home home-half home-registration" id="home">
      <div className="bg-overlay"></div>
      <div className="display-table">
        <div className="display-table-cell">
          <div className="container">
            <div className="vertical-content row">
              <div className="text-white text-left mt-4 col-lg-7">
                <h1 className="home-title">Welcome to Bad Bank</h1>
                <p className="pt-3 home-desc home-subtitle-width-100">Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                <Link className="btn btn-primary mt-4 waves-effect waves-light" to="/create-account">Get Started <i className="mdi mdi-arrow-right"></i></Link>
              </div>
              <div className="mt-4 col-lg-4 offset-lg-1">
                <div className="home-registration-form bg-white">
                  <h4 className="form-heading text-center mt-2">LOGIN</h4>
                  <div id="registration-form" className="registration-form">
                    <span className="error">{loginError}</span>
                    <span className="error">{error}</span>
                    <input value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" type="text" className="form-control registration-input-box form-control" />
                    <input value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" type="password" className="form-control registration-input-box form-control" />
                    <button type="button" className="btn-custom btn-primary home-btn-width waves-effect waves-light btn btn-none" onClick={login}>{loading ? "Loading..." : "Login"}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
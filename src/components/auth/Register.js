import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import classnames from 'classnames';
import {connect} from 'react-redux'
import {registerUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'
// import axios from 'axios';
class Register extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)

  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }

    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors: nextProps.errors })
      }
    }
    onChange = (e) => {
      // console.log('name>>',e.target.name)//this logs the name of the field
      // console.log('value>>',e.target.value)//this logs the value of that field
      this.setState({[e.target.name ]: e.target.value })//
    }

    onSubmit = (e) => {
      e.preventDefault()

      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      }
      console.log(newUser)

      this.props.registerUser(newUser, this.props.history)
      console.log("mierda",this.props);
      // axios.post('/api/users/register', newUser)
      // .then((res)=>{
      //   console.log(res.data)
      // })
      // .catch(err => this.setState({errors: err.response.data}))
    }

  render() {

    const {errors} = this.state




    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your Tesla Enthusiast account</p>

                <form onSubmit={this.onSubmit}>

                  <TextFieldGroup
                    placeholder="Name"
                    type="type"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextFieldGroup
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                  />


                  <input type="submit" className="btn btn-info btn-block mt-4"/>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


export default connect( mapStateToProps, {registerUser})(withRouter(Register))

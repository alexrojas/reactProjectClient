import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import InputGroup from '../common/InputGroup'
import SelectListGroup from '../common/SelectListGroup'
import {createProfile} from '../../actions/profileActions'
import {withRouter} from 'react-router-dom'

class CreateProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      displaySocialInputs: false,
      name: '',
      car:  '',
      status: '',
      message: '',
      bio: '',
      referralCode: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      youtube: '',
      twitter: '',
      facecbook: '',
      instagram: '',
      errors: {}

  }
  // this.onChange = this.onChange.bind(this)
  // this.onSubmit = this.onSubmit.bind(this)
}

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

onSubmit = (e) =>{
  e.preventDefault()
  const profileData = {
    name: this.state.name,
    status: this.state.status,
    car: this.state.car,
    referralCode: this.state.referralCode,
    bio: this.state.bio,
    twitter: this.state.twitter,
    facebook: this.state.facebook,
    youtube: this.state.youtube,
    instagram: this.state.instagram,
  }

  this.props.createProfile(profileData, this.props.history);
}


onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }



  render(){

    const {errors, displaySocialInputs} = this.state

    let socialInputs;

    if(displaySocialInputs){
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.Twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>

      )
    }

    const options = [
      { label: '* Select Availability to share your Personal Charger', value: 0 },
      { label: 'Yes I want to Share', value: 'yes' },
      { label: 'No can do', value: 'No' }
    ]

    return(
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create your Profile</h1>
              <p className="lead text-center">
                Let's get some more information to make your profile
              </p>
              <small className="d-block pb-3" >* = required fields </small>


              <form onSubmit={this.onSubmit}>


                    <TextFieldGroup
                      placeholder="* Profile Name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />

                    <SelectListGroup
                      placeholder="Status"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                      options={options}
                      error={errors.status}
                      info=""
                    />

                    <TextFieldGroup
                      placeholder="Car Model S..3..X..Roadster"
                      type="text"
                      name="car"
                      value={this.state.car}
                      onChange={this.onChange}
                      error={errors.car}
                      info="What Tesla car do you have?"
                    />
                    <TextFieldGroup
                      placeholder="Referral Coder"
                      type="text"
                      name="referralCode"
                      value={this.state.referralCode}
                      onChange={this.onChange}
                      error={errors.referralCode}
                      info="Provide your Referal so others can use it."
                    />
                    <TextAreaFieldGroup
                      placeholder="Short Bio"
                      name="bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      error={errors.bio}
                      info="Tell us a little about yourself"
                    />

                    <div className="mb-3" >
                      <button
                      type="button"
                      onClick={() => {
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                      className="btn btn-light"
                    >
                      Add Social Network Links
                    </button>
                      <span className="text-muted" >Optional </span>
                    </div>

                    {socialInputs}
                    <input type="submit" value="submit" className="btn btn-info btn-block mt-4" />




                {/* <input type="submit" className="btn btn-info btn-block mt-4" /> */}
              </form>


            </div>
          </div>
        </div>
      </div>

    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);

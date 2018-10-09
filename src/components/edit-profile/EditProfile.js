import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import InputGroup from '../common/InputGroup'
import SelectListGroup from '../common/SelectListGroup'
import {withRouter} from 'react-router-dom'
import {createProfile, getCurrentProfile} from '../../actions/profileActions'
import isEmpty from '../../validation/is-empty'


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

componentDidMount() {
  this.props.getCurrentProfile()
}

componentWillReceiveProps(nextProps) {
  console.log('props1', nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.profile.profile){
      const profile = nextProps.profile.profile

      // profile.name = !isEmpty(profile.name) ? profile.name : "";
      profile.name = !isEmpty(profile.name) ? profile.name : "";
      profile.status = !isEmpty(profile.status) ? profile.status : "";
      profile.car = !isEmpty(profile.car) ? profile.car : "";
      profile.referralCode = !isEmpty(profile.referralCode) ? profile.referralCode : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.name = !isEmpty(profile.company) ? profile.company : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {}
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : "";
      profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : "";
      profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : "";
      profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : "";
      profile.adress = !isEmpty(profile.address) ? profile.address: {}
      // profile.street = !isEmpty(profile.address.street) ? profile.address.street : "";
      // profile.city = !isEmpty(profile.address.city) ? profile.address.city : "";
      // profile.state = !isEmpty(profile.address.state) ? profile.address.state : "";
      // profile.zip = !isEmpty(profile.address.zip) ? profile.address.zip : "";


      this.setState({
        name: profile.name,
        status: profile.status,
        car: profile.car,
        referralCode: profile.referralCode,
        bio: profile.bio,
        street: profile.street,
        city: profile.city,
        state: profile.state,
        zip: profile.zip,
        twitter: profile.twitter,
        facebook: profile.facebook,
        youtube: profile.youtube,
        instagram: profile.instagram,
      })
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
    street: this.state.street,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip,
    twitter: this.state.twitter,
    facebook: this.state.facebook,
    youtube: this.state.youtube,
    instagram: this.state.instagram,
  }

  this.props.createProfile(profileData, this.props.history);
}


onChange = (e) => {
  console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }



  render(){

    const {errors, displaySocialInputs} = this.state

    let addressInfo;
    if(this.state.status === 'yes'){
      addressInfo = (
        <div>
          <TextFieldGroup
            placeholder="Street "
            type="text"
            name="street"
            value={this.state.street}
            onChange={this.onChange}
            error={errors.street}
            info="Street Name"
          />
          <TextFieldGroup
            placeholder="City "
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.onChange}
            error={errors.city}
            info="City Name"
          />
          <TextFieldGroup
            placeholder="State "
            type="text"
            name="state"
            value={this.state.state}
            onChange={this.onChange}
            error={errors.state}
            info="State info"
          />
          <TextFieldGroup
            placeholder="Zip code "
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.onChange}
            error={errors.zip}
            info="Zip code please"
          />

        </div>

      )
    }

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
              <h1 className="display-4 text-center">Edit Profile</h1>

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

                      {addressInfo}




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
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);

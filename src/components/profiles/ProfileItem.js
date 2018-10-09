import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          {/* <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div> */}
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              Availability to Share Charger:  <h5>{profile.status}</h5>{' '}
              {/* {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )} */}
            </p>
            <p>
             Tesla Owner of:  {isEmpty(profile.car) ? null : (
                <h5>{profile.car}</h5>
              )}
            </p>
            <Link to={`/profile/${profile.name}`} className="btn btn-info">
              View Profile
            </Link>

            {/* <Link to={`/profile/${profile.name}`}> {user.name} </Link> */}
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Address</h4>
            <ul className="list-group">
            {/* {profile.skills.slice(0, 4).map((skill, index) => ( */}
              <li className="list-group-item">
                {/* <i className="fa  pr-1" /> */}
                {/* {profile.address.street} */}
                State: {profile.address.state},
                <hr />
                Zip Code: {profile.address.zip}
              </li>

          </ul>

          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

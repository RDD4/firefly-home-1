/**
 * Created by tong on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import HouseList from './HouseList';
import SelectZone from './SelectZone';
import {requestHouseOfSelectedCity} from '../../actions/houselist';
import Header from '../Header';
import Footer from '../Footer';

class HouseResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {houseResource, requestHouseOfSelectedCity} = this.props;

    return (
      <div>
        <Header />
        <br/>
        <div>
          <SelectZone select={requestHouseOfSelectedCity} initialCity={houseResource.city}/>
          <br/><br/>
          <HouseList houses={houseResource}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houseResource: state.houseResource
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    requestHouseOfSelectedCity: (city)=> {
      dispatch(requestHouseOfSelectedCity(city));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseResource);

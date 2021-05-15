import React, { useState } from 'react';
import Map from '../../components/map';
import Input from '../../components/input';
import Button from '../../components/button';
import Select from '../../components/select';
import LoadingIndicator from '../../components/loader';

import { fetchBikes } from '../../utils/request';
import { latitudeMatch, longitudeMatch } from '../../utils/textMatch';
import { config } from '../../config/vars';

import './styles.css';

const BikeFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [bikes, setBikes] = useState([]);
  const [selectPlace, setSelectPlace] = useState('');
  const [distance, setDistance] = useState(50);
  const [limit, setLimit] = useState(10);

  const onChangeLatitude = (value) => {
    setLatitude(value);
    setSelectPlace('');
  };

  const onChangeLongitude = (value) => {
    setLongitude(value);
    setSelectPlace('');
  };

  const onChangeSelect = (value) => {
    setLatitude(''); 
    setLongitude('');
    setSelectPlace(value); 
  };

  const onClickSubmit = async () => {
    try {
      if(limit && distance) {
        if(latitude && longitude && latitudeMatch(latitude) && longitudeMatch(longitude)) {
          setIsLoading(true);
          const data = await fetchBikes(latitude, longitude, distance, limit);
          setBikes(data.response);
          setIsLoading(false);
          if(data.response && data.response.length === 0) {
            alert('No bikes found');
          }
        } else if(selectPlace !== '' && typeof selectPlace !== "undefined") {
          setIsLoading(true);
          const place = config.LOCATION_LIST[selectPlace];
          const [latitude, longitude] = [place.lat, place.lng];
          const data = await fetchBikes(latitude, longitude, distance, limit);
          setBikes(data.response);
          setIsLoading(false);
          if(data.response && data.response.length === 0) {
            alert('No bikes found');
          }
        } else {
          alert('Inputs are not correct');
        }
      } else {
        alert('Inputs are not correct');
      }
    } catch(error) {
      console.log(error);
      alert('Something went wrong please try again later');
      setBikes([]);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Beam Bike Finder</h1>
        <h2 class="form-subtitle">
          Select from list or Input latitude and longitude and click on submit
        </h2>
        <Select lable="Location" optionList={config.LOCATION_LIST} value={selectPlace} onChange={(value) => onChangeSelect(value)} />
        <h2>OR</h2>
        <Input type="text" lable="Latitude" placeholder="eg. 1.3690926" value={latitude} onChange={({target}) => onChangeLatitude(target.value)} />
        <Input type="text" lable="Longitude" placeholder="eg. 103.8164342" value={longitude} onChange={({target}) => onChangeLongitude(target.value)} />
        <div className="line-break" />
        <Input type="text" lable="Distance (KM)" placeholder="eg. 50" value={distance} onChange={({target}) => setDistance(target.value)} />
        <Input type="text" lable="Limit" placeholder="eg. 50" value={limit} onChange={({target}) => setLimit(target.value)} />
        <Button text="submit" onClick={onClickSubmit} />
      </div>
      {bikes.length ? <Map bikes={bikes} centerLatitude={latitude} centerLongitude={longitude} /> : isLoading ? <LoadingIndicator /> : null}
    </div>
  );
}

export default BikeFinder;
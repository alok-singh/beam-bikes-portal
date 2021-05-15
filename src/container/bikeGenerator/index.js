import React, { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import LoadingIndicator from '../../components/loader';

import { generateBikes } from '../../utils/request';
import { latitudeMatch, longitudeMatch } from '../../utils/textMatch';

import './styles.css';

const BikeGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [minLatitude, setMinLatitude] = useState();
  const [maxLatitude, setMaxLatitude] = useState();
  const [minLongitude, setMinLongitude] = useState();
  const [maxLongitude, setMaxLongitude] = useState();
  const [numberOfBikes, setNumberOfBikes] = useState();

  const onClickSubmit = async () => {
    setIsLoading(true);
    try {
      if(minLatitude && !latitudeMatch(minLatitude)) {
        alert('minLatitude is not correct');
        return;
      }
      if(maxLatitude && !latitudeMatch(maxLatitude)) {
        alert('maxLatitude is not correct');
        return;
      }
      if(minLongitude && !longitudeMatch(minLongitude)) {
        alert('minLongitude is not correct');
        return;
      }
      if(maxLongitude && !longitudeMatch(maxLongitude)) {
        alert('maxLongitude is not correct');
        return;
      }
      alert('Without input, bikes will be generated with default values minLatitude = 1.30, maxLatitude = 1.36, minLongitude = 103.65, maxLongitude = 103.99, limit = 1000');
      await generateBikes(minLatitude, maxLatitude, minLongitude, maxLongitude, numberOfBikes);
      setIsLoading(false);
      alert('Bikes generated');
    } catch(error) {
      console.log(error);
    }
  }

  return (
    isLoading ? <LoadingIndicator /> : 
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Beam Bike Generator</h1>
        <h2 class="form-subtitle">
          Please Input all the values to generate bike which are going to be inserted in Database
        </h2>
        <Input type="text" lable="Min Latitude" placeholder="eg. 1.3690926" value={minLatitude} onChange={({target}) => setMinLatitude(target.value)} />
        <Input type="text" lable="Max Latitude" placeholder="eg. 1.3690926" value={maxLatitude} onChange={({target}) => setMaxLatitude(target.value)} />

        <Input type="text" lable="Min Longitude" placeholder="eg. 103.8164342" value={minLongitude} onChange={({target}) => setMinLongitude(target.value)} />
        <Input type="text" lable="Max Longitude" placeholder="eg. 103.8164342" value={maxLongitude} onChange={({target}) => setMaxLongitude(target.value)} />
        
        <Input type="text" lable="Bikes" placeholder="eg. 50" value={numberOfBikes} onChange={({target}) => setNumberOfBikes(target.value)} />
        <Button text="submit" onClick={onClickSubmit} />
      </div>
    </div>
  );
}

export default BikeGenerator;
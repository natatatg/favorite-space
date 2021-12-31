import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import SpaceCard from './SpaceCard';
import * as spaceService from '../service/spaceservice';
import { DateTime } from 'luxon';



export default function SpaceCards() {
  const [nasaData, setNasaData] = useState([]);
  const [mappedCards, setMappedCards] = useState([]);

  useEffect(() => {
  let endDate = DateTime.now().toFormat('yyyy-MM-dd');
  let startDate = DateTime.now().plus({ days: -20 }).toFormat('yyyy-MM-dd');
    spaceService.get(startDate, endDate).then(onGetNasaDataSuccess).catch(onGetNasaDataError);
  }, []);

  useEffect(() => {
    setMappedCards(nasaData.map(mapNasaData));
  }, [nasaData]);

  const onGetNasaDataSuccess = (response) => {
    //reverse data array to have most recent date show first
    let reverseDataArray = response.data.reverse();
    setNasaData(reverseDataArray);
    // console.log(response.data);
  };
  const onGetNasaDataError = (response) => {
    console.error(response);
  };

  //when nasa data array gets populated, map through and make card components for each
  const mapNasaData = (nasaData) => {
    return (
      <SpaceCard
        key={nasaData.date}
        nasaData={nasaData}
      ></SpaceCard>
    )
  };

  return (
    <Box sx={{mx: 'auto'}}>
      {mappedCards}
    </Box>
  );
}

//react imports
import { useState } from 'react';

//mui imports
import { Grid } from '@mui/material';

//gql queries
import { GetLaunchesPast } from '../graphql/queries/GetLaunchesPast';

//apollo client imports
import { useQuery } from "@apollo/client";

//interfaces import
import PastLaunchInterface from '../model/PastLaunch/PastLaunch';

//components import
import LoadingData from '../components/LoadingData';
import PastLaunch from '../components/PastLaunch';

export default function Index () {

  const { loading, error, data } = useQuery(GetLaunchesPast);
  const [pastLaunches, setPastLaunches] = useState([]);

  if ( data && pastLaunches.length === 0) {
    const filteredPastLaunches = data?.launchesPast?.filter( (pastLaunch: PastLaunchInterface) => { 
      return (pastLaunch?.details !== null && pastLaunch?.links?.flickr_images?.length) ? true : false 
    }) ?? []; //I dont want past launches without details and without images

    setPastLaunches(filteredPastLaunches);
  }

  if ( error ) { 
    throw error;
  }

  return (
    <Grid container spacing = { 2 } padding = { 5 }>
      {
        loading ? 
        <LoadingData /> :
        pastLaunches?.map( (pastLaunch: PastLaunchInterface, i: number) => {
          return <PastLaunch 
                  id = { pastLaunch?.id }
                  details = { pastLaunch?.details } 
                  mission_name = { pastLaunch?.mission_name } 
                  links = { pastLaunch?.links }
                  key = { i } />
        })
      }
    </Grid>
  );
}
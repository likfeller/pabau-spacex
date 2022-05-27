import { useState } from 'react';
import { useRouter } from 'next/router';

//mui imports
import { Grid } from '@mui/material';

//gql queries
import { GetLaunchById } from '../../graphql/queries/GetLaunchesPast';

//apollo client imports
import { useQuery } from "@apollo/client";

//components import
import LoadingData from '../../components/LoadingData';
import RocketDetails from '../../components/RocketDetails';

export default function RocketDetailsPage () {

    const router = useRouter();
    const { id } = router?.query;

    const { loading, error, data } = useQuery(GetLaunchById, {
        variables : {
            id: id
        }
    });

    if ( error ) {
        throw error;
    }

    return (
        <Grid container spacing = { 2 } padding = { 5 }>
        {
          loading ? 
          <LoadingData /> :
          <RocketDetails links = { data?.launch?.links } rocket = { data?.launch?.rocket } />
        }
      </Grid>
        
    )
}
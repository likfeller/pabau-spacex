import { Grid } from '@mui/material';

//interfaces import
import PastLaunchInterface from '../model/PastLaunch/PastLaunch';

//components import
import PastLaunchImage from './PastLaunchImage';
import PastLaunchViewRocketButton from './PastLaunchViewRocketButton';

export default function PastLaunch ({id, details, mission_name, links} : PastLaunchInterface) {

    const pastLaunchImageSrc = links?.flickr_images?.[0] ?? 'N/A';
    
    return (

        <Grid item xs={ 12 } sm={ 3 } >
            <Grid container spacing={ 2 } >
                <Grid item xs={12} >
                    <PastLaunchImage img_src = { pastLaunchImageSrc } />
                </Grid>
                <Grid item xs={12} >
                    <h3>{mission_name}</h3>
                </Grid>
                <Grid item xs={12} >
                    <p>{details}</p>
                </Grid>
                <Grid item xs={12} >
                   <PastLaunchViewRocketButton pastLaunchId = { id } />
                </Grid>
            </Grid>
        </Grid>

    )
}
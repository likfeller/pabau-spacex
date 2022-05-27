import Link from 'next/link'
import { Button } from '@mui/material';

//interfaces import
import PastLaunchViewRocketButtonInterface from '../model/PastLaunchViewRocketButton/PastLaunchViewRocketButton';

export default function PastLaunchViewRocketButton ( { pastLaunchId } : PastLaunchViewRocketButtonInterface) {
    return (
        <Link
            href={{
            pathname: '/rocket-details',
            query: { id: pastLaunchId },
            }}
        >
            <Button variant="contained">View rocket details</Button>
        </Link>
        
    )
}
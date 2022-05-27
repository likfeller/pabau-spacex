import PastLaunchImageInterface from '../model/PastLaunchImage/PastLaunchImage';

export default function PastLaunchImage ({ img_src } : PastLaunchImageInterface ) {
    return (
        <img src = { img_src } style = { {width: "200px", height: "200px"}}/>
    )
}
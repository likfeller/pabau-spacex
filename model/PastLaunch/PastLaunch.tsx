import internal from "stream";
import LaunchSite from "../LaunchSite/LaunchSite";
import Links from "../Links/Links";
import Rocket from '../Rocket/Rocket';

export default interface PastLaunch {
    id: number,
    details: string,
    launch_date_local?: string,
    launch_site?: LaunchSite,
    launch_success?: boolean,
    launch_year?: string,
    links?: Links,
    mission_name: string,
    rocket?: Rocket,
    __typename?: string,
}
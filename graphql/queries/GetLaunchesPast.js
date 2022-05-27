//apollo client imports
import { gql } from "@apollo/client";

export const GetLaunchesPast = gql`
query GetLaunchesPast {
    launchesPast(limit: 10) {
        id
        mission_name
        launch_date_local
        launch_site {
            site_name_long
        }
        links {
            article_link
            video_link
            flickr_images
        }
        rocket {
            rocket_name
            rocket_type
        }
        launch_success
        launch_year
        details
    }
}`

export const GetLaunchById = gql`
query GetLaunchById ($id: ID!) {
  launch(id: $id) {
    id
    rocket {
      rocket_name
      rocket_type
    }
    links {
      flickr_images
    }
  }
}`
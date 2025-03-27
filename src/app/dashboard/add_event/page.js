import AddEventComponent from "@/components/forms/add_event_form"

import DBconnect from "@/lib/db"
import Venue from "@/lib/models/venue"
import Event from "@/lib/models/events"

export default async function AddEventPage(){
    await DBconnect();
    const venues = await Venue.find({});
    

    return(
        <AddEventComponent
            venuesList={JSON.parse(JSON.stringify(venues))}
        />
    )
}
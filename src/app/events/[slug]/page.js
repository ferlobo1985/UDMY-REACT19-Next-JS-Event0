import { findEventById } from "@/lib/actions/actions";
import Image from "next/image";
import VenueCardComponent from "@/components/events/venue_card";

export default async function EventsPage({params}) {
    const eventID =  (await params).slug;
    const event = await findEventById(eventID);

    return(
        <div className="max-w-5xl mx-auto my-10">

            <div className="relative w-auto h-[500px]">
                <Image
                    src={`https://picsum.photos/800/800?${eventID}`}
                    fill
                    alt="band"
                    style={{objectFit:"cover"}}
                    priority={true}
                />
            </div>

            <div className="py-4">
                <div className="py-10">
                    <h1 className="text-7xl">{event.artist}</h1>
                    <h3 className="text-3xl">{event.venue.name}</h3>
                </div>
                <p>{event.description}</p>
            </div>

            <VenueCardComponent
                venueData={JSON.parse(JSON.stringify(event.venue))}
                eventDate={event.date}
            />

        </div>
    )

}
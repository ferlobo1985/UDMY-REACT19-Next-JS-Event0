import Image from "next/image";
import { findEvents } from '@/lib/actions/actions'
import EventsMasonryComponent from "@/components/events_masonry";

export default async function Home() {
  const eventShows = await findEvents(0,6)
 
  async function loadMore(skip,limit) {
    'use server'
    const nextEvents = await findEvents(skip,limit);
    return JSON.parse(JSON.stringify(nextEvents))
  }


  return (
   <>
    <div className="relative w-auto h-[200px]">
      <Image src="/images/band/band_one.jpg" fill alt="band" style={{objectFit:"cover"}}/>
      <div className="absolute bottom-0 w-full h-full bg-black/60 text-center text-5xl text-white py-32 antonfont">
        Rocking hard since 1964
      </div>
    </div>

    <EventsMasonryComponent
      eventShows={JSON.parse(JSON.stringify(eventShows))}
      loadMore={loadMore}
    />

   </>
  );
}

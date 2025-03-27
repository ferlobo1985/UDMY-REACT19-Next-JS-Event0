'use server'

import DBconnect from "@/lib/db";
import Venue from '@/lib/models/venue'
import AddVenueSchema from "@/components/forms/add_venue_schema";

export async function addVenue(prevState,formData) {
    await DBconnect();
    try{
        /// VALIDATION
        const isValid = await AddVenueSchema(formData);
        //// check if is valid

        const newVenue = new Venue({
            name:formData.get('name'),
            address:formData.get('address'),
            state:formData.get('state')
        });
        await newVenue.save();
        return { success: true,message:"Event added"}
    } catch(error){
        return { success: false,message:[]}
    }

}
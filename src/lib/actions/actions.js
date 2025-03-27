'use server'

import DBconnect from "@/lib/db";
import Venue from '@/lib/models/venue'
import AddVenueSchema from "@/components/forms/add_venue_schema";

export async function addVenue(prevState,formData) {
    await DBconnect();
    try{
        /// VALIDATION
        const isValid = await AddVenueSchema(formData);
        if(!isValid.success){
            return { success: false, message: isValid.errors }
        }

        const newVenue = new Venue({
            name:formData.get('name'),
            address:formData.get('address'),
            state:formData.get('state')
        });
        await newVenue.save();
        return { success: true, message:"Venue added"}
    } catch(error){
        return { success: false,message:[error.message]}
    }

}
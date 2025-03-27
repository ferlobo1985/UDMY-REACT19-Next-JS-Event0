'use client'

import { Input, Button, Divider, Select, SelectItem } from '@heroui/react'
import { states } from '@/components/states';
import { useActionState } from 'react';

export default function AddVenueComponent(){

    return(
       <form className='max-w-2xl mx-auto'>
            <h1 className='text-5xl py-5'>Add venue</h1>
            <Divider className='mb-5'/>

            <Input
                className='mb-5'
                type='text'
                label="venue name"
                variant='bordered'
                fullWidth={true}
                name="name"
            />

            <Input
                className='mb-5'
                type='text'
                label="Address"
                variant='bordered'
                fullWidth={true}
                name="address"
            />

            <Select
                items={states}
                label="State"
                placeholder='Select the State'
                fullWidth={true}
                className='mb-5'
                name='state'
            >
                { (state)=><SelectItem key={state.name}>{state.name}</SelectItem>}
            </Select>

            <Button color='secondary' variant='solid' type='submit'>
                Add Venue
            </Button>

       </form>
    )
}
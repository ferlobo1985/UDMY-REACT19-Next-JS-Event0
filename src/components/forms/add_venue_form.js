'use client'

import { Input, Button, Divider, Select, SelectItem } from '@heroui/react'
import { states } from '@/components/states';
import { useActionState } from 'react';

export default function AddVenueComponent(){

    return(
       <form className='max-w-2xl mx-auto'>
            <h1 className='text-2xl py-5'>Add venue</h1>
       </form>
    )
}
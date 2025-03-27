'use client'

import { useState, useTransition } from "react"
import { Input, Button, Divider, Select, SelectItem, Textarea} from '@heroui/react'
import { errorHelper } from "@/components/utils";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { redirect } from "next/navigation";


export default function AddEventComponent({venuesList}){
    const [startDate,setStartDate] = useState(null)

    const formik = useFormik({
        initialValues:{
            artist:"",
            venue:"",
            description:"",
            date:"",
            slug:"",
        },
        validationSchema:Yup.object({
            artist:Yup.string().required(),
            venue:Yup.string().required(),
            description:Yup.string().required(),
            date:Yup.string().required(),
            slug:Yup.string().required(),
        }),
        onSubmit: async(values)=>{
            console.log(values)
        }
    })

    return(
      <form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
        <h1 className="text-5xl py-5">Add Event</h1>
        <Divider className="mb-5"/>

        <Input
            className="mb-5"
            type="text"
            label="Artist name"
            variant="bordered"
            fullWidth={true}
            {...formik.getFieldProps('artist')}
            {...errorHelper(formik,'artist')}  
        />

        <Select
            label="Venue"
            placeholder="Select a Venue"
            fullWidth={true}
            className="mb-5"
            {...formik.getFieldProps('venue')}
            {...errorHelper(formik,'venue')}  
        >
            { venuesList?.map((venue)=>(
                <SelectItem key={`${venue._id}`}>
                    {venue.name}
                </SelectItem>
            ))}
        </Select>

        <Divider className="mb-5"/>

        <Textarea
            label="Description"
            placeholder="Enter a description"
            fullWidth={true}
            className="mb-5"
            variant="bordered"
            {...formik.getFieldProps('description')}
            {...errorHelper(formik,'description')}  
        />

        <DatePicker
            selected={startDate}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            onChange={(date)=>{
                formik.setFieldValue('date',date,true)
                setStartDate(date)
            }}
            customInput={
                <CustomPickerButton formik={formik}/>
            }
        />

        <Divider className="mb-5"/>

        <Input
            className="mb-5"
            type="text"
            label="Slug"
            variant="bordered"
            fullWidth={true}
            {...formik.getFieldProps('slug')}
            {...errorHelper(formik,'slug')}  
        />

        <Button color='secondary' variant='solid' type='submit'>
            Add Event
        </Button>

      </form>
    )
}

const CustomPickerButton = (({value, onClick, formik, ref}) => (
    <>
        <Button
            color={formik.errors.date && formik.touched.date ? 'danger':'primary'}
            variant="bordered"
            className="mb-5"
            onPress={onClick}
            ref={ref}
        >
            { value ? value:'Enter a date'}
        </Button>
        { formik.errors.date && formik.touched.date ?
            <span className="text-xs text-red-600 ml-5">
                {formik.errors.date}
            </span>
        :null}
    </>
))
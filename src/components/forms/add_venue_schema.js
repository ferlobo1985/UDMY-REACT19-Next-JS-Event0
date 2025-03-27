import * as yup from 'yup';


export default async function AddVenueSchema(formData){
    /// GET DATA
    const data = {
        name:formData.get('name'),
        address:formData.get('address'),
        state:formData.get('state')
    }

    /// SCHEMA
    const schema = yup.object({
        name:yup.string().required('Name in required').min(2).max(100),
        address: yup.string().required('Address in required').min(5).max(150),
        state: yup.string().required('State in required')
    })

   /// RETURN 
   try {
        await schema.validate(data,{ abortEarly:false })
        return { success: true,data:data}
   } catch(errors){
        // console.log(errors.inner)
        /// errors
        let newErrors = []
        /// map errors
        errors.inner.forEach(({path, message})=>{
            if(path != null){
                newErrors.push(message)
            }
        })
        return { success: false, errors: newErrors }
   }


}
import React from 'react'
import { database } from '../../assets/FireBase'

import  { useEffect, useState } from 'react'

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'

function Form(){
    const [fname,setFname] =useState('')
    const [email,setEmail] =useState('')
    const [contact,setContact] =useState('')
    const [service,setService] =useState('')



    const [id,setId] =useState('')

    const [show,setShow] =useState(false)
    


    const [val,setVal] =useState([])


    
    const value = collection(database,"Car Service")


    useEffect(()=>{
        const getData= async()=>{
          const dbVal = await getDocs(value)
          setVal(dbVal.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getData()
    })

    const handleCreate =async()=>{
        await addDoc(value,{FullName:fname,Mail:email,Phn:contact,Service:service})
        setFname("")
        setContact("")
        setEmail("")
        setService("")
    }

    const handleDelete =async(id)=>{
       const deleteVal =  doc(database,"Car Service",id)
       await deleteDoc(deleteVal)
    }

    const handleEdit =async(id,FullName,Mail,Phn,Service)=>{
        setFname(FullName)
        setEmail(Mail)
        setContact(Phn)
        setService(Service)
        setId(id)
        setShow(true)
    }

    const handleUpdate =async()=>{
        const updateData = doc(database,"Car Service",id)
        await updateDoc(updateData,{FullName:fname,Mail:email,Phn:contact,Service:service})
        setShow(false)
        setFname("")
        setContact("")
        setEmail("")
        setService("")
    }

    return(
      <>
       <div className='w-[50vw] min-h-[120vh] flex flex-col'>
        
             <div className=' w-[70%] h-[60vh]  rounded-xl my-5 mx-48 border shadow-xl'>
             <div className='container'>
              <div className='flex flex-col w-[80%] mx-auto  pt-5'>
              <input placeholder=' Full Name' className='w-[25vw] bg-gray-100 outline-none mx-auto border font-semibold rounded-lg mt-8  py-2 px-3 ' value={fname} onChange={(e) => setFname(e.target.value)} />
           <input type="email" placeholder='Email' className='w-[25vw] bg-gray-100 outline-none mx-auto border font-semibold rounded-lg mt-8 py-2 px-3 '  value={email} onChange={(e) => setEmail(e.target.value)} />
           <input type="number" placeholder="Phone No." className='w-[25vw] bg-gray-100 outline-none  mx-auto border font-semibold rounded-lg mt-8 py-2 px-3 ' value={contact} onChange={(e) => setContact(e.target.value)} />
           <input type="text" placeholder='Service' className='w-[25vw] bg-gray-100 outline-none  mx-auto border font-semibold rounded-lg mt-8 py-2 px-3 '  value={service} onChange={(e) => setService(e.target.value)} />

           {!show?<button className='bg-[#E1CD8C] w-fit px-3 mt-8 font-medium  py-1 mx-auto text-lg  rounded-md' onClick={handleCreate}>Create</button>:
           <button className='bg-[#E1CD8C]  mt-8 font-medium px-3 py-1 text-lg  rounded-md mx-auto' onClick={handleUpdate}>Update</button>}

              </div>
              </div>
              </div>
           
           {
            val.map(values=>
            <div className=' px-[300px] py-2 flex'>

<div className=' flex flex-col  bg-black bg-opacity-20 rounded-xl px-5 py-2'>
                <h1 className=' my-1 min-w-[250px] px-2 py-1 bg-[#215277] text-white text-xl  mx-1' >{values.FullName}</h1>
                <h1 className=' my-1 px-2 py-1 bg-[#215277] bg-opacity-80 text-white text-xl  mx-1' >{values.Mail}</h1>
                <h1 className=' my-1 px-2 py-1 bg-[#215277] text-white text-xl  mx-1' >{values.Phn}</h1>
                <h1 className=' my-1 px-2 py-1 bg-[#215277] bg-opacity-80 text-white text-xl  mx-1'>{values.Service}</h1>
                <div className=' flex justify-between px-10 py-5'>
                <button  className="flex justify-center py-1 items-center gap-2 w-20  cursor-pointer rounded-md shadow-lg text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]" onClick={()=>handleDelete(values.id)}><RiDeleteBin5Line /></button>
                <button   className="flex justify-center items-center gap-2 w-20  cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-green-400 via-green-800 to-green-600 hover:shadow-lg hover:shadow-green-500 hover:scale-105 duration-300 hover:from-green-700 hover:to-green-400" onClick={()=>handleEdit(values.id,values.name1,values.name2)}><FaEdit /></button>
                </div>
                </div>
                
            </div>)
           }
        </div>
        
        

        </>
    )
}
export default Form;

















// const Form = () => {
//   return (
//     <div className='w-[50vw] h-[90vh]'>
        
//     <div className=' w-[70%] h-[90vh]  rounded-xl my-5 mx-48 border shadow-xl'>
//         <h1 className=' text-5xl font-semibold   text-[#215277]'>Get In Touch</h1>
//         <h1 className=' text-md font-semibold mt-8  '>Get your automotive-related questions answered by a mechanic</h1>


// <form >
// <input type="text" placeholder=' Full Name' className='w-[25vw] bg-gray-100 outline-none  border font-semibold rounded-lg mt-8  py-2 px-3 ' />
// <input type="email" placeholder='Email' className='w-[25vw] bg-gray-100 outline-none  border font-semibold rounded-lg mt-8 py-2 px-3 ' />
//   <input type="number" placeholder='Phone No.' className='w-[25vw] bg-gray-100 outline-none  border font-semibold rounded-lg mt-8 py-2 px-3 ' />
// <input placeholder='Service Name'  className='w-[25vw]  bg-gray-100 outline-none  border font-semibold rounded-lg mt-8 py-2 px-3 ' ></input>

// <button className='bg-[#E1CD8C]  mt-8 font-semibold  py-3 text-lg  rounded-md'>Submit</button>
// </form>
 
//     </div>

//     </div>
//   )
// }

// export default Form
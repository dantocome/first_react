import React from 'react'
import { useForm } from 'react-hook-form'
import "./ContactHook.css"

const ContactHook = () => {
    // const myForm = useForm();
    // console.log(myForm);
    const{register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data)=>{
   console.log(data);
   
    }

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  {...register("name",{required:true, minLength:3})}/>
          {errors.name?.type==='required' && <p>Name field cannot be empty</p>}
          {errors.name?.type==='minLength' && <p>Name cannot be less than 3 characters</p>}
        </div>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input type="text" id="name"  {...register("email",{required:true, minLength:3})}/>
          {errors.name?.type==='required' && <p>email field cannot be empty</p>}
        </div>
        <button type="submit">send</button>
      </form>
    )











// const{register, handleSubmit, formState:{errors}} = useForm();

//     const onSubmit = (data)=>{
//       console.log(data);
//     }
      

    
    
//   return (
//     <form  onSubmit={handleSubmit(onSubmit)}>
//     <div className="form">
//    <label htmlFor="name">Name:</label><br></br>
//    <input id="name" type="text"  {...register("name", {required:true, minLength:3})} />
//    {errors.name?.type==='required'&& <p className='errors'>Name field cannot be empty</p>}
//    {errors.name?.type=== 'minLength' && <p className='errors'>Name cannot be less than 3 characters</p>}

//    </div>
//    <div className="form">
//    <label htmlFor="">Email:</label><br></br>
//    <input type="email"  />
//    </div>
//    <div className="form">
//    <label htmlFor="">Password:</label><br></br>
//    <input type="password"  />
//    </div>
//     <button type="submit">Send</button>
//    </form>

//   )
  }
  
    
export default ContactHook;


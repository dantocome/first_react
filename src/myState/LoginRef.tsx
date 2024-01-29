import React, { useRef } from "react";


const LoginRef = ()=>{
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const users = {name:"", email:"", password:""};

    const handleSubmit = (event)=>{
       event.preventDefault();

      //  const nameValue = nameRef.current.value;
      //  const emailValue = emailRef.current.value;
      //  const passwordValue = passwordRef.current.value;
      //  console.log("Name  :"+nameValue);
      //  console.log("Email  :"+emailValue);
      //  console.log("Password  :"+passwordValue);

       
       if(nameRef.current !==null)
       users.name = nameRef.current.value;

       if(emailRef.current !==null)
       users.email = emailRef.current.value;

       if(passwordRef.current !==null)
       users.password = passwordRef.current.value;
       console.log(users);
      localStorage.setItem("inputValues", JSON.stringify(users));
     
      const usersData = JSON.parse(localStorage.getItem("inputValues"));
     
      console.log(usersData);
     
       
    }
    
   
    return(
      <>
       <form onSubmit={handleSubmit}>
        <div className="form">
       <label htmlFor="name">Name:</label><br></br>
       <input id="name" type="text"   ref={nameRef}/>
       </div>
       <div className="form">
       <label htmlFor="">Email:</label><br></br>
       <input type="email"  ref={emailRef}/>
       </div>
       <div className="form">
       <label htmlFor="">Password:</label><br></br>
       <input type="password"  ref={passwordRef}/>
       </div>
        <button type="submit">Send</button>
       </form>
       
       </>

    )
}
export default LoginRef;

// function ContactHook(){
//    // const myForm = useForm();
//    // console.log(myForm);
//    const{register, handleSubmit, formState:{errors}} = useForm();

//    const onSubmit = (data)=>{
//   console.log(data);
  
//    }

//  return (
//    <form  onSubmit={handleSubmit(onSubmit)}>
//    <div className="form">
//   <label htmlFor="name">Name:</label><br></br>
//   <input id="name" type="text"  {...register("name", {required:true, minLength:3})} />
//   {errors.name?.type==='required'&& <p className='errors'>Name field cannot be empty</p>}
//   {errors.name?.type=== 'minLength' && <p className='errors'>Name cannot be less than 3 characters</p>}

//   </div>
//   <div className="form">
//   <label htmlFor="">Email:</label><br></br>
//   <input type="email"  />
//   </div>
//   <div className="form">
//   <label htmlFor="">Password:</label><br></br>
//   <input type="password"  />
//   </div>
//    <button type="submit">Send</button>
//   </form>

//  )
//  }
 
   














// const LoginRef = ()=>{
//     const nameRef = useRef("");
//     const emailRef = useRef("");
//     const passwordRef = useRef("");
//     const users = {name:"", email:"", password:""}

//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         // const nameValue = nameRef.current.value;
//         // const emailValue = emailRef.current.value;
//         // const passwordValue = passwordRef.current.value;

//         // console.log("Name  :"+nameValue);
//         // console.log("Email  :"+emailValue);
//         // console.log("Password  :"+passwordValue);

//         if(nameRef.current !== null)
//         users.name = nameRef.current.value;
//         if(emailRef.current !== null)
//         users.email = emailRef.current.value;
//         if(passwordRef.current !== null)
//         users.password = passwordRef.current.value;

//         console.log(users);
    

        
//     }

//     return(
//       <form onSubmit={handleSubmit}>
//         <div className="form">
//             <label htmlFor="">Name</label>
//             <input type="text"  ref={nameRef}/>
//         </div>
//         <div className="form">
//             <label htmlFor="">Email</label>
//             <input type="text"  ref={emailRef}/>
//         </div>
//         <div className="form">
//             <label htmlFor="">Password</label>
//             <input type="password" ref={passwordRef} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     )
    

// }
// export default LoginRef;
import React, { useRef } from "react";

const LoginRef = ()=>{
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const users = {name:"", email:"", password:""};

    const handleSubmit = (event)=>{
       event.preventDefault();

       const nameValue = nameRef.current.value;
       const emailValue = emailRef.current.value;
       const passwordValue = passwordRef.current.value;
       console.log("Name  :"+nameValue);
       console.log("Email  :"+emailValue);
       console.log("Password  :"+passwordValue);

       
    //    if(nameRef.current !==null)
    //    users.name = nameRef.current.value;

    //    if(emailRef.current !==null)
    //    users.name = emailRef.current.value;

    //    if(passwordRef.current !==null)
    //    users.name = passwordRef.current.value;
    //    console.log(users);
       
    }
    return(
       <form onSubmit={handleSubmit}>
        <div className="form">
       <label htmlFor="">Name:</label>
       <input type="text"  ref={nameRef}/>
       </div>
       <div className="form">
       <label htmlFor="">Email:</label>
       <input type="text"  ref={emailRef}/>
       </div>
       <div className="form">
       <label htmlFor="">Password:</label>
       <input type="text"  ref={passwordRef}/>
       </div>
        <button type="submit">Send</button>
       </form>

    )
}
export default LoginRef;

























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
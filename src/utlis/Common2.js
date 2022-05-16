export const getdoctor =() =>{
    const docstr= sessionStorage.getItem('doctor');
    if(docstr) return JSON.parse(docstr);
    else return null;
    }
    
    export const gettokken =() =>{
        return sessionStorage.getItem("token") || null;
    
    }
    
    export const setdoctorsession =(token,doctor) =>{
        sessionStorage.setItem('token' ,token);
        sessionStorage.setItem('doctor',JSON.stringify(doctor));
    
    } 
    
    export const removedoctorsession =() =>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('doctor');
    } 
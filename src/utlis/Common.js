export const getuser =() =>{
const userstr= sessionStorage.getItem('user');
if(userstr) return JSON.parse(userstr);
else return null;
}

export const gettokken =() =>{
    return sessionStorage.getItem("token") || null;

}

export const setusersession =(token,user) =>{
    sessionStorage.setItem('token' ,token);
    sessionStorage.setItem('user',JSON.stringify(user));

} 

export const removeusersession =() =>{
sessionStorage.removeItem('token');
sessionStorage.removeItem('user');
} 
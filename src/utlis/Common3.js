export const getlab =() =>{
const labstr= sessionStorage.getItem('lab');
if(labstr) return JSON.parse(labstr);
else return null;
}

export const ggettokken =() =>{
    return sessionStorage.getItem("token") || null;

}

export const setlabsession =(token,lab) =>{
    sessionStorage.setItem('token' ,token);
    sessionStorage.setItem('lab',JSON.stringify(lab));

} 

export const removelabsession =() =>{
sessionStorage.removeItem('token');
sessionStorage.removeItem('lab');
} 
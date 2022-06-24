export const getlab=() =>{
const labstr = localStorage.getItem('lab');
if(labstr)return JSON.parse(labstr);
else return null;
}

export const ggettokken =() =>{
    return localStorage.getItem("token") || null;

}

export const setlabsession =(token,lab) =>{
    localStorage.setItem('token' ,token);
    localStorage.setItem('lab', JSON.stringify(lab));

} 

export const removelabsession =() =>{
localStorage.removeItem('token');
localStorage.removeItem('lab');
} 
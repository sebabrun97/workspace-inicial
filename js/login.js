function enviarDatos() {  

    
    let passwordLog = document.getElementById("password").value;
    let usuarioLog = document.getElementById("login").value;
    
    
    if (usuarioLog==="" || passwordLog===""){
       alert ("debe rellenar los campos en blanco");
            } else{
              location.href='index.html';
            }
               
    

}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('inicio').addEventListener('click',()=>{enviarDatos();})
    

})


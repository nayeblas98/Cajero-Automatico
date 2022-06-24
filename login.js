//Lista de usuarios con contraseñas:
var cuentas=[
    {nombre:"Mali", saldo:200, nip:2103},
    {nombre:"Gera", saldo:290, nip:1916},
    {nombre:"Maui", saldo:67, nip:2309}
];
var index
var user
var nip

// Validacion de solo ingresar numeros en el nip
const validateNumber=(event)=>{
    if(event.charCode>=48 && event.charCode<=57){
        return true
    }
    else{
        return false
    }
}

//obtener indice de usuario
const obtainUser=()=>{
    user=document.getElementById("user").value
    nip=document.getElementById("nip").value
    for(let i=0;i<=cuentas.length;i++){
        if(i==cuentas.length){
            index=-1
            login(index)
        }
        else if(cuentas[i].nombre==user){
            index=i
            login(index)
            break
        }
    }
}

//Validaciones Login
const login=(ind)=>{
    if(user==""){
        swal("Debes ingresar tu usuario.", "", "warning");
    }
    else if(ind==-1){
        document.getElementById("user").value=""
        document.getElementById("nip").value=""
        swal("Usuario no encontrado.","Intente de nuevo.", "error");
        
    }
    else if(user==cuentas[ind].nombre && nip==parseInt(cuentas[ind].nip)){
        welcome(ind)
        
    }

    else{
        document.getElementById("nip").value=""
        swal('Escriba contraseña o la contraseña es errónea.',"Inténtelo de nuevo.", "warning");
    }
}

//redireccion a las transacciones
const welcome=(ind)=>{
    location.href="./operations.html?saldo="+cuentas[ind].saldo+"&name="+user
}
//Recibe los parametros
var params = new URLSearchParams(location.search)

//obtiene los parametros)
var perfil,users
var arrayNames=["Gera","Mali","Maui"]
var nombre=params.get('name')
var datos=document.getElementById("data")


//Validaciones iniciales)
for(let i=0;i<arrayNames.length;i++){
    if(nombre==arrayNames[i]){
        if(!(arrayNames[i] in localStorage)){
            localStorage.setItem(arrayNames[i],1)
            users={name: nombre , saldo: parseInt(params.get('saldo'))}
        }
        else{
            users={name: nombre, saldo: JSON.parse(localStorage.getItem(arrayNames[i])).saldo}
        }
        localStorage.setItem(arrayNames[i], JSON.stringify(users))
        perfil = JSON.parse(localStorage.getItem(arrayNames[i]))
        
    }
}

//función consultar saldo
const consulta=()=>{
    data.innerHTML="¡Hola "+perfil.name+"!"+"<br>Tu saldo actual es: <br> $"+perfil.saldo

}

//función para depositar 
const deposito=()=>{
    data.textContent=""
    deposit=parseInt(prompt("Ingresa la cantidad que deseas depositar."))
    perfil.saldo+=deposit
    if(perfil.saldo>990){
        perfil.saldo-=deposit
        swal("No puedes depositar esa cantidad porque tu saldo va a superar $990.","Intenta con otra cantidad.", "error")
    }
    else if(isNaN(deposit) || deposit < 0 || deposit == ""){
        swal("Valor no valido.","Intenta con otra cantidad.", "error")
        
    }
    else{
        users.saldo=perfil.saldo
        localStorage.setItem(perfil.name, JSON.stringify(users))
        data.innerHTML="Monto ingresado:<br> $"+deposit +" <br> Saldo total: <br> $"+ perfil.saldo
    }
}

//funcion para retirar
const retiro=()=>{
    retire=parseInt(prompt("Ingresa la cantidad que desea retirar."))
    perfil.saldo-=retire
    if(perfil.saldo<10){
        perfil.saldo+=retire
        swal("No puedes tener menos de $10 en tu cuenta.","Intenta con otra cantidad.", "error")
    }
    else if(isNaN(retire) || retire < 0 ){
        swal("Valor no valido.","Intenta con otra cantidad.", "error")
    }
    else{
        users.saldo=perfil.saldo
        localStorage.setItem(perfil.name, JSON.stringify(users))
        data.innerHTML="Monto retirado: <br> $"+ retire +" <br> Saldo total: <br> $"+ perfil.saldo
    }
}
let num1 = Number (prompt('Escoge el primer numero'))
let num2 = Number (prompt('Escoge el segundo numero'))
let cal = Number (prompt ("Que operacion desea realizar, 1: suma, 2: multiplicar, 3. resta, 4. dividir?"))

sum=num1+num2;
rest=num1-num2
mult=num1*num2;
div=num1/num2
switch(cal){
    case 1:
        alert(sum)
        break
    case 2:
        alert(mult)
        break
    case 3:
        alert(rest)
        break
    case 4:
        alert(div)
        break
    default:
        alert('No se conoce ninguna operacion')
}
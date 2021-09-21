function converter(){
    let valorElemento= document.getElementById("valor")
    let valor= valorElemento.value
    let valorEmDolar= parseFloat (valor)

    let valorEmReal= valorEmDolar*5
    console.log(valorEmReal)

    let valorValorconvertido= document.getElementById("valorConvertido")
    let valorConvertido=`O resultado em real é R$ ${valorEmReal}`


    valorValorconvertido.innerHTML=valorConvertido
}

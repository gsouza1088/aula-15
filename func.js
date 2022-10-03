function main() {
    var n1 = parseFloat(document.getElementById("num1").value)
    var n2 = parseFloat(document.getElementById("num2").value)
    var total = ""

    if (document.getElementById("soma").checked)
        total = soma(n1, n2)

    if (document.getElementById("subtracao").checked)
        total = subtracao(n1, n2)

    if (document.getElementById("multiplicacao").checked)
        total = multiplicacao(n1, n2)

    if (document.getElementById("divisao").checked)
        total = divisao(n1, n2)

    alert(total)


    function soma(x, y) { return (x + y) }


    function subtracao(x, y) { return (x - y) }


    function multiplicacao(x, y) { return (x * y) }


    function divisao(x, y) { return (x / y) }

}

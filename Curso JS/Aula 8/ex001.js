5 > 2 // true
7 < 4 // false
8 >= 8 // true
9 <= 7 // false
5 == 5 // true
4 != 4 // false

var a = 8
var b = 15
a > b         // false
a < b         // true
a <= b - 10   // false
a == b        // false

preço >= 200,50         // Preço é maior ou igual a 200,50?
idade < 18              // Idade é menor que 18?
curso == 'JavaScript'   // Curso é igual a JavaScript?
n1 != n2                // n1 é diferente de n2?

5 == 5     // true, 5 é igual a 5.
5 == '5'   // true, 5 é igual a '5' independente do tipo.
5 === '5'  // false, 5 é identico a '5'?? não, são de tipos diferentes.
5 === 5    // true, 5 é identico a 5, são valores iguais e tipos iguais.
5 != '5'   // false, 5 é diferente de '5'? não, são de valores iguais.
5 !== '5'  // true, 5 é desigual restrito de '5'? Sim, são de tipos diferentes.

var a = 5
var b = 8
true && false  // false
true && true   // true
false || false // false
true || false  // true
true || true   // true
a > b && b % 2 == 0 // false, primeiro lado false e o segundo true.
a<= b || b / 2 == 2 // true, primeiro lado true e o segundo false.

idade >= 15 && idade <= 17       // a idade esta entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o rstado é RJ ou SP?
salário > 1500 && sexo != 'M'    // o salario é acima de 1500 e não é um homem?

var media = 5.5
media > 7?'APROVADO':'REPROVADO' // REPROVADO, media menor que 7
media += 3 // 5.5 recebe +3 se tornando 8.5
media > 7?'APROVADO':'REPROVADO' // APROVADO, media agora maior que 7

var x = 8
var res = x % 2 == 0 ? 5: 9 // res recebe 5 pois x que é 8, feito 8%2 resta 0, sendo igual a 0, portanto true.

var idade = 19
var r = idade >= 18 ? 'MAIOR' : 'MENOR' // r recebe 'MAIOR' pois idade é maior ou igual a 18, portanto true.
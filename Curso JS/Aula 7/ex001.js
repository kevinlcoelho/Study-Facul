//var a = 5 + 3
//var b = a % 5 
//var c = 5 * b ** 2 
//var d = 10 - a / 2 
//var e = 6 * 2 / d 
//var f = b % e + 4 / e

var n = 3 // ai n fica com 3
n = n + 4 // n q valia 3 agora vale 7
n = n - 5 // n q valia 7 agora vale 2
n = n * 4 // n vira 8
n = n / 2 // n vira 4
n = n ** 2 // n vira 16
n = n % 5 // n vira 1

// podendo simplificar 
var n = 3
n += 4 // msm coisa que "n = n + 4" porem simplificado, mas ele só aceita se for receber ele mesmo, se fosse receber um x por exemplo nao funcionaria
n -= 5 // n vira 2
n *= 4 // n vira 8
n /= 2 // n vira 4
n **= 2 // n vira 16
n %= 5 // n vira 1

var n = 10
n += 1 // ja vimos que aqui somaria 1 e passaria a valer 11, porem podemos simplificar quando estamos somando ou subtraindo apenas 1
n -- // aqui n voltou ao seu valor de 10 pois subtraimos 1
n ++ // agr passou a ser 11 novamente pois adicionamos 1 nele
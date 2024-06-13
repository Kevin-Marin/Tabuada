let numeroescolhido = [];
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8,  9, 10];
console.log("Deseja buscar a tabuada de qual número?");

process.stdin.on("data", function(data) {
    if(numeroescolhido) {
        numeroescolhido = Number(data.toString().trim());
        for(i = 0; i <= tabuada.length; i++) {
            console.log(`${numeroescolhido} x ${i} = ${numeroescolhido * i}`);
        }
    }
});
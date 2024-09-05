function Fibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    if (next === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso:
const number = 21; // Insira o número que deseja verificar
console.log(Fibonacci(number));
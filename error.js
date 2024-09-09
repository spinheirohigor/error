function errortest(array, number) {
    try {
        if (!array && !number) throw new ReferenceError("Parâmetros não enviados");
        if (typeof array !== 'object') throw new TypeError("Array diferente do tipo object");
        if (typeof number !== 'number') throw new TypeError("Numero diferente do tipo number");
        if (array.length !== number) throw new RangeError("Tamanho do array diferente do número informado");
        return array;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Erro do tipo ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Erro do tipo TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Erro do tipo RangeError");
            console.log(e.message);
        } else { console.log('Erro inesperado' + e); }
    }

}

console.log(errortest(['casa', 'carro', 'camelo', 'caramelo'], 2));
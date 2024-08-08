// Strategy Pattern
interface Operacion {
    calcular(a: number, b: number): number;
}

class Suma implements Operacion {
    calcular(a: number, b: number): number {
        return a + b;
    }
}

class Resta implements Operacion {
    calcular(a: number, b: number): number {
        return a - b;
    }
}

class Multiplicacion implements Operacion {
    calcular(a: number, b: number): number {
        return a * b;
    }
}

class Division implements Operacion {
    calcular(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }
}

// Factory Method Pattern
class OperacionFactory {
    static crearOperacion(tipo: string, tipoNumero: string): Operacion {
        switch (tipo) {
            case "suma":
                return tipoNumero === "entero" ? new Suma() : new Suma();
            case "resta":
                return tipoNumero === "entero" ? new Resta() : new Resta();
            case "multiplicacion":
                return tipoNumero === "entero" ? new Multiplicacion() : new Multiplicacion();
            case "division":
                return tipoNumero === "entero" ? new Division() : new Division();
            default:
                throw new Error("Operación no soportada.");
        }
    }
}

// Adapter Pattern
class IntegerAdapter {
    private valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    toReal(): number {
        return this.valor;
    }
}

// Uso de la aplicación
function calcularOperacion(tipoOperacion: string, a: number, b: number, tipoNumero: string): number {
    const operacion = OperacionFactory.crearOperacion(tipoOperacion, tipoNumero);

    if (tipoNumero === "entero") {
        a = new IntegerAdapter(a).toReal();
        b = new IntegerAdapter(b).toReal();
    }

    return operacion.calcular(a, b);
}

// Ejemplo de uso
const resultadoSuma = calcularOperacion("suma", 5, 10, "entero");
console.log(`Resultado de la suma: ${resultadoSuma}`);

const resultadoDivision = calcularOperacion("division", 10, 2, "real");
console.log(`Resultado de la división: ${resultadoDivision}`);

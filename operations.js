var Suma = /** @class */ (function () {
    function Suma() {
    }
    Suma.prototype.calcular = function (a, b) {
        return a + b;
    };
    return Suma;
}());
var Resta = /** @class */ (function () {
    function Resta() {
    }
    Resta.prototype.calcular = function (a, b) {
        return a - b;
    };
    return Resta;
}());
var Multiplicacion = /** @class */ (function () {
    function Multiplicacion() {
    }
    Multiplicacion.prototype.calcular = function (a, b) {
        return a * b;
    };
    return Multiplicacion;
}());
var Division = /** @class */ (function () {
    function Division() {
    }
    Division.prototype.calcular = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    };
    return Division;
}());
// Factory Method Pattern
var OperacionFactory = /** @class */ (function () {
    function OperacionFactory() {
    }
    OperacionFactory.crearOperacion = function (tipo, tipoNumero) {
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
    };
    return OperacionFactory;
}());
// Adapter Pattern
var IntegerAdapter = /** @class */ (function () {
    function IntegerAdapter(valor) {
        this.valor = valor;
    }
    IntegerAdapter.prototype.toReal = function () {
        return this.valor;
    };
    return IntegerAdapter;
}());
// Uso de la aplicación
function calcularOperacion(tipoOperacion, a, b, tipoNumero) {
    var operacion = OperacionFactory.crearOperacion(tipoOperacion, tipoNumero);
    if (tipoNumero === "entero") {
        a = new IntegerAdapter(a).toReal();
        b = new IntegerAdapter(b).toReal();
    }
    return operacion.calcular(a, b);
}
// Ejemplo de uso
var resultadoSuma = calcularOperacion("suma", 5, 10, "entero");
console.log("Resultado de la suma: ".concat(resultadoSuma));
var resultadoDivision = calcularOperacion("division", 10, 2, "real");
console.log("Resultado de la divisi\u00F3n: ".concat(resultadoDivision));

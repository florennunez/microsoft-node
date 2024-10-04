const { addressParser } = require('../address-parser');
// El script de prueba:

//Comprueba la capacidad de análisis de la función address-parser.js.
//Garantiza que la función puede analizar correctamente la información necesaria.
describe('Address Parser', () => {
    test('should parse correctly', () => {
        expect(addressParser("I want to to order: 3 books to address: 112 street city here is my payment info: cardnumber")
        ).toEqual({
            order: "3 books",
            address: "112 street city",
            payment: "cardnumber",
        });
    });
});
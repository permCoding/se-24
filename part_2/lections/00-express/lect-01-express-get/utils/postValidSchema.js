// https://express-validator.github.io/docs/6.15.0/schema-validation
// https://dev.to/jayeshchoudhary/schema-based-validation-using-express-validator-in-nodejs-5ck0

const postValidSchema = {
    lastName: {
        notEmpty: { errorMessage: 'не может быть пустым' },
        isString: true, errorMessage: 'поле строковое',
        isLength: {  options: { min: 2, max: 20} },
        errorMessage: 'от 2-х до 20-ти символов'
    },
    rating: {
        notEmpty: { errorMessage: 'не может быть пустым' },
        isInt: true, errorMessage: 'должен быть целым'
    },
    gender: {
        exists: { errorMessage: "гендер требуется" },
        notEmpty: { errorMessage: 'не может быть пустым' },
        isIn: {
            options: [["0", "1"]],
            errorMessage: 'гендер только 0 или 1',
        }
    },
    birthDate: { 
        notEmpty: { errorMessage: 'не может быть пустым' },
        isDate: true, errorMessage: 'нужен формат даты'
    },
    city: {
        notEmpty: { errorMessage: 'не может быть пустым' },
        isLength: {
            options: { min: 2, max: 20},
            errorMessage: 'должен быть от 2-х до 20-ти символов'
        }
    },
}

module.exports = {
    postValidSchema
}

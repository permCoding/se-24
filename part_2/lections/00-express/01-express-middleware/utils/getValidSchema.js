// https://express-validator.github.io/docs/6.15.0/schema-validation
// https://dev.to/jayeshchoudhary/schema-based-validation-using-express-validator-in-nodejs-5ck0

const getValidSchema = {
    city: {
        notEmpty: { errorMessage: 'не может быть пустым' },
        isLength: {
            options: { min: 2, max: 20},
            errorMessage: 'должен быть от 2-х до 20-ти символов'
        }
    },
}

module.exports = {
    getValidSchema
}

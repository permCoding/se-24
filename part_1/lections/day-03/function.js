function test_1() {
    let field = 'test';
    return field;
}

function test_2() {
    let field_1 = '- f1 -';
    let field_2 = '- f2 -';
    return { field_1, field_2 };
}

function test_3() {
    let field_1 = '- f1 -';
    let field_2 = '- f2 -';
    return [ field_1, field_2 ];
}

console.log(test_1());
console.log(test_2.toString());
let res_2 = test_2();
console.log(res_2.field_1);
console.log(res_2.field_2);

console.log(test_3());

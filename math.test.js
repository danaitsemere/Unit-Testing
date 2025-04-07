const {add,subtract,multiply, divide}=require('./math');
test('add 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('Subtract 7 - 3 to equal 4', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divide 6/3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});




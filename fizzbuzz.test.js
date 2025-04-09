const fizzBuzz= require('./fizzbuzz');
test('',()=>{
    expect(fizzBuzz(45)).toBe('FizzBuzz');
});

test('',()=>{
    expect(fizzBuzz(27)).toBe('Fizz');
});

test('',()=>{
    expect(fizzBuzz(50)).toBe('Buzz');
});




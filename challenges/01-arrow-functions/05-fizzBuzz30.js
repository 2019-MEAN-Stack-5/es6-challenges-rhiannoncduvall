//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

// let fizzBuzz30 = () => 



let fizzBuzz30 = () => {
    let output = [];
    for (let i = 1; i < 31; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push('fizzbuzz')
        }   else if (i % 3 === 0) {
            output.push('fizz');
        } else if (i % 5 === 0) {
            output.push('buzz');
        } else {
            output.push(i);
        }
    } return output;
}



//Do not edit
module.exports = fizzBuzz30;


// for(let i = 1 ; i <= 1000 ; i++){
//     console.log(i)
// }
// For numbers from 1-1000
// i%3 == 0, print "Fizz"
// i%5 == 0, print "Buzz"
// i%15 == 0, print 'FizzBuzz'
// else print number only
let numberList = document.querySelector('.numberList');
for (let i = 1; i <= 1000; i++) {
    let str = '';

    if (i % 3 == 0) str = 'Fizz';
    if (i % 5 == 0) str += 'Buzz';

    let x = ((str == '') ? i : str);
    // numberList.innerHTML += `<li>${x}</li>`

    // let li = document.createElement('li');
    // li.innerText = x;
    // numberList.appendChild(li);
}
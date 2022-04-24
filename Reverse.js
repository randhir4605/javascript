let reverse= (input) => {
    const charArr=[...input];
    return charArr.reverse().join("");
}

console.log(reverse('ABC'));

let reveredOutput=reverse('Randhir');
console.log(reveredOutput);
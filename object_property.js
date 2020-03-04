const students = [
        {id:001,name: 'Asif'},
        {id:002,name: 'Arif'},
        {id:002,name: 'Jasmin'},
        {id:002,name: 'Sadia'}
];
// for(let i=0;i<students.length;i++)
// {
//     // const show = students[i];
//     show.push(students[i].name);
    
// }
const studsName = students.map( s => s.name);

// filter
const specificName = students.filter(s => s.name == 'Asif');

console.log(studsName);
console.log(specificName);

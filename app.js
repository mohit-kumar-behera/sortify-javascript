const sortify = require('./sortify.js');

const students = [
  {
    name: 'Vikramaditya Satrujit',
    percentage: 89,
  },
  {
    name: 'Pravir Tina',
    percentage: 72,
  },
  {
    name: 'Yaman Paola',
    percentage: 72,
  },
  {
    name: 'Balagovind Anand',
    percentage: 95,
  },
  {
    name: 'Martand Chet',
    percentage: 78,
  },
  {
    name: 'Dhiraj Jeevan',
    percentage: 91,
  },
  {
    name: 'Aatish Manohari',
    percentage: 91,
  },
  {
    name: 'Bibek Thankur',
    percentage: 78,
  },
  {
    name: 'Dhiraj Jeevan',
    percentage: 82,
  },
  {
    name: 'Sujay Dristi',
    percentage: 78,
  },
  {
    name: 'Bibek Loy',
    percentage: 92,
  },
  {
    name: 'Gopichand Sajeev',
    percentage: 94,
  },
];

console.log(students);
sortify(students, '-percentage', 'name');
console.log(students);

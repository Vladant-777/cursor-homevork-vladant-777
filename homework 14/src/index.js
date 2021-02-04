import { getMaxPrice } from './hw1';
import { getSum } from './hw2';
import { getMaxDigit } from './hw3';
import { breakIntoPairs } from './hw4';
import { setThemsForStudens } from './hw4';
import { getRandomArray } from './hw5';
import { getSubjects } from './hw6';
import { getMyTaxes } from './hw7';
import { Student } from './hw8';
import { generateBlocksInterval } from './hw9';
import './index.css';

const applePrice = 15.678;
const orangePrice = 123.965;
const pearPrice = 90.2345;
console.log(getMaxPrice(applePrice, orangePrice, pearPrice));

console.log(getSum(5, 10, true));

console.log(getMaxDigit(12345567));

const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const breakStudentIntoPairs = breakIntoPairs(students);
const setThems = setThemsForStudens(breakStudentIntoPairs, themes);
console.log(setThems);

console.log(getRandomArray(5, 1, 10));

const stdent = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
console.log(getSubjects(stdent[0]));

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
console.log(getMyTaxes.call(ukraine, 56467));

const vlad = new Student(`КПІ`, '5', 'Іванов Іван Іванович');
console.log(`Інформація про студента:`, vlad.getInfo());

generateBlocksInterval();

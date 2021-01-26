function* createIdGenerator(value) {
  let num = value;
  while (true) yield num++;
}

const idGenerator = createIdGenerator(1);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

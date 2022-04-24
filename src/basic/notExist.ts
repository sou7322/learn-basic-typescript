export default function notExistSample() {
  let name = null;
  name = 'Amy';

  console.log('nullName:', typeof name, name);

  if (!name) {
    console.log("I'm John Doe");
  } else {
    console.log(`I'm ${name}.`);
  }

  let age = undefined;
  age = 15;

  console.log('nullName:', typeof age, age);

  if (!age) {
    console.log("My age is confidential.");
  } else {
    console.log(`I'm ${age} years old.`);
  }
}
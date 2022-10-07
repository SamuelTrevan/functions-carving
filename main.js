/*
In the createWoodBlock function, return an object with the following properties
    1. A type property with a value of "wood block"
    2. A length property with a value of 10
    3. A material property with a value of "pine"
    4. A purpose property with a value of "flute"

In the createBeautifulCarving function, return a string that looks like the following template.
"The 10-inch, pine woodblock was carved into a wooden flute"
*/

const createWoodBlock = () => {
  const woodBlock = {
    type: "wood block",
    length: 10,
    material: "pine",
    purpose: "flute",
  };
  return woodBlock;
};

const createBeautifulCarving = (object) => {
  const carvingString = `The ${object.length}-inch, ${object.material} woodblock was carved into a wooden ${object.purpose}`;
  return carvingString;
};

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock); // <-- Missing an argument. Fix it.

console.log(carvingString);

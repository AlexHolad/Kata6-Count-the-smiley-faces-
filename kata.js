//return the total number of smiling faces in the array
const countSmileys = (arr) => {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
};

console.log(countSmileys([";->", ";)", ";>", ";o>", ";~>", ";>", ":~>", ";)"]));

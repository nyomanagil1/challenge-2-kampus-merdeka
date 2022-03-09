const isValidPassword = (givenPassword) => {
  let passw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (String(givenPassword).match(passw)) {
    return true;
  } else if (givenPassword == undefined) {
    return 'ERROR : Bro where is the parameter?';
  } else if (typeof givenPassword == 'number') {
    return 'ERROR : Invalid Parameter';
  } else {
    return false;
  }
};

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

// this function checks to see if the card number is valid or not
const validateCred = (array1) => {
  let count = 0;
  let sum = 0;
  //looping through the array in reverse
  for (let i = array1.length - 1; i >= 0; i--) {
    // counting it so i can grab every other element
    count++;
    if (count % 2 !== 0) {
      sum += array1[i];
    } else if (count % 2 === 0) {
      //nested loop to run an argument if it's greater the 9
      if (array1[i] * 2 > 9) {
        sum += array1[i] * 2 - 9;
      } else {
        sum += array1[i] * 2;
      }
    }
  }
  if (sum % 10 === 0) {
    return "valid";
  } else {
    return "invalid";
  }
};

// this function loops thru the batch array and the returns an array of all the invalid cards
const findInvalidCards = (array2) => {
  // empty array to store the invalid cards
  let invalidCards = [];
  // looping thru the batch array
  for (i = 0; i < array2.length; i++) {
    // calling back the validateCred() funtion
    if (validateCred(array2[i]) === "invalid") {
      invalidCards.push(array2[i]);
    }
  }
  return invalidCards;
};

// this function loops thru the invalid cards and identifies and returns the companies of the cards
const idInvalidCardCompanies = (invalidArrays) => {
  // empty array to store the companies with invalid cards
  let invalidCardCompanies = [];
  // calling back the findInvalidCards() function and storing it in invalidComCards
  let invalidComCards = findInvalidCards(invalidArrays);
  // looping thru the nested array anf selecting the first element
  for (i = 0; i < invalidComCards.length; i++) {
    let indexOfCards = invalidComCards[i];
    if (indexOfCards[0] === 3) {
      invalidCardCompanies.push("Amex (American Express)");
    } else if (indexOfCards[0] === 4) {
      invalidCardCompanies.push("Visa");
    } else if (indexOfCards[0] === 5) {
      invalidCardCompanies.push("Mastercard");
    } else if (indexOfCards[0] === 6) {
      invalidCardCompanies.push("Discover");
    } else {
      invalidCardCompanies.push("Company not found");
    }
  }
  // removes all the duplicates from the array and returns a new array uniqueInvalidCompanies
  let uniqueInvalidCompanies = [...new Set(invalidCardCompanies)];
  return uniqueInvalidCompanies;
};

// converting string into an array
const formatingString = (str) => {
  let newCreditCard = str.split("");
  return newCreditCard;
};


// tests
console.log(idInvalidCardCompanies(batch));
console.log(formatingString("143562748"));

// // Example of call without args
// const theFirm = {
//     title: 'The Firm',
//     author: 'John Grisham',
//     yearOfRelease: 1991,
//     getYearOfRelease() {
//       return this.yearOfRelease;
//     },
//     introduceAuthor(message) {
//       return `${this.author} ${message}`;
//     },
//   };
    
//   console.log(theFirm.getYearOfRelease()); // prints 1991
  
//   const theDaVinciCode = {
//     title: 'The Da Vinci Code',
//     author: 'Dan Brown',
//     yearOfRelease: 2003,
//   };
  
//   console.log(theFirm.getYearOfRelease.call(theDaVinciCode)); // prints 2003
  
//   // Example of call with args
  
//   console.log(theFirm.introduceAuthor('has written a total of 100 books'));
  
//   console.log(theFirm.introduceAuthor.call(theDaVinciCode, 'is an American author best known for this thriller novels'))





// apply

// const theFirm = {
//     title: 'The Firm',
//     author: 'John Grisham',
//     yearOfRelease: 1991,
//     getYearOfRelease() {
//       return this.yearOfRelease;
//     },
//     introduceAuthor(message) {
//       return `${this.author} ${message}`;
//     },
//   };
  
//   console.log(theFirm.getYearOfRelease()); // prints 1991
  
//   const theDaVinciCode = {
//     title: 'The Da Vinci Code',
//     author: 'Dan Brown',
//     yearOfRelease: 2003,
//   };
  
//   console.log(theFirm.getYearOfRelease.apply(theDaVinciCode)); // prints 2003
  
//   // Example of apply with args
  
//   console.log(theFirm.introduceAuthor('has written a total of 100 books'));
//   console.log(theFirm.introduceAuthor.apply(theDaVinciCode, ['is an American author best known for this thriller novels']));




// bind
const theFirm = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
      return this.yearOfRelease;
    },
    introduceAuthor(message) {
      return `${this.author} ${message}`;
    },
  };
  
  const theDaVinciCode = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
  };
  
  // using bind
  const boundFunction = theFirm.getYearOfRelease.bind(theDaVinciCode);
  
  boundFunction(); // prints 2003

  
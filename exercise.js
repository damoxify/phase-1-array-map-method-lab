const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
    ];

function titleCased() {
   
    // Function to capitalize the first letter of each word in a string
    function capitalize(str) {
      return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  
    // Map over the tutorials array and apply the capitalize function to each tutorial
    return tutorials.map((tutorial) => capitalize(tutorial));
  }
  
  
  console.log(titleCased());
  
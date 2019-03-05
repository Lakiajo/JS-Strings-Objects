


console.log(1 === '1');//false
//console.log(1 == '1');//true
console.log(1 !== '2')//true

console.log('cats', length)//how many characters in a string
const quote = 'Winter is coming';
console.log(quote.indexOf('is'));

const catName = () => {
    return 'killer';
}


const bucket0cats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: cancelAnimationFrame,
    cat4: {
        water: 'Nope',
        sunlight: 'Yes'
    }
};
//dot notation
console.log(bucket0cats.cat2);
//bucket notation

console.log(bucket0cats.cat4.water);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

const employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
  
  }
  const answer1 = `Our Companys Lawyer is ${employee.name}`;
  const answer2 = `Jeff was hired on ${employee.hire_date}`;

  const eom = "employee_of_the_month";
  console.log(employee === 'eom');//false

  const printToDom = (divId, textToPrint) => {
    console.log(textToPrint)
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};
printToDom('Employee', answer1);
printToDom('Employee', answer2);

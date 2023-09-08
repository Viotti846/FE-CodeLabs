/* EXERCISE 1:  
outerVar is GLOBAL while innerVar works only within the specific function of innerFunction()

EXERCISE 2:
function mainFunction() {
  let newThing = 'nt';
  console.log(newThing);
}

mainFunction();

EXERCISE 3:

function getYear(){
  let year = 2023;
  function getMonth(){
    let month = 'Sept';
    function getDate(){
      let day = 7
      console.log('Today is ' + month + ' '+ day +', '+ year)
    }
    getDate();
  }
  getMonth();
}
getYear();

EXERCISE 4:

const today = 90723;

function modifyGlobal() {
  let today = 90823;
  console.log(today);
}

function localScopeTest() {
  let today = 90923;
  console.log(today);
}
modifyGlobal(); //value within function overrides the global value for the function application//
localScopeTest();

EXERCISE 5:

function areaRectangle(height = 4, width = 3){
  let areaR = height * width;
  function perimeterRectangle(){
    let perimR = 2*(height + width);
    console.log('The area of the rectangle is '+areaR+ ' sq units and has a perimeter of '+ perimR+' units.')
  }
  perimeterRectangle();
}

areaRectangle();

EXERCISE 6:

function hoistingTest(){
  console.log(tree);
}

hoistingTest();

const tree = 'birch'; //error because variable is defined after the call for the function.  Works if const is before call of function.

EXERCISE 7/8:

function setupCounter() {
  const i = 0; 
     return function(i){
        i++;
        console.log(i);
    };
}

setupCounter();

function setupCounter() {
  let i = 0; 
  while (i < 11){
    console.log(i);
    i++;
  };
     return function(){
    };
}

setupCounter();

/*EXERCISE 8:  The counter variable must be internalized within the function at a local level to ensure that it increments and caps out.

/*EXERCISE 9:

let global = 'globe';

function newGlobal(){
  global = 'globes';
  function globalFactory(){
    console.log('The global varaibles is now called '+global);
  }
  globalFactory();
}

function localScopeTest(){
  local ='newLocals';
  let local = 'locals';
  console.log(local);
}

newGlobal();
localScopeTest();

Local variables must be defined before modification within a function or it will result in an error.  nested variable values for global variables will be taken when evaluating outer functions - cascading waterfall flow - like css styles.*/

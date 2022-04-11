// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 1, (step2) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 2, (step3) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 3, (step4) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 4, (step5) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // Callbacks in sequence
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        
        console.log("Mashed potatoes are ready");
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>"Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

});

// Iteration 2 - using promises
// ...
// Iteration 2 - using promises
function obtainInstruction(step){
  return new Promise(function (resolve, reject){
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

    if (!steak[step]) reject("not found")
    else resolve();
  })
}





//obtainInstruction('steak', 0)
//  .then( (step0) => {
//    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
//  })
  // ... Your code here
  obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() => obtainInstruction(7))
  .catch((error) => console.log(err));



// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
let counter_btn =  document.querySelector("#counter-btn");
let counter_space =  document.querySelector("#counter-space");

let add = (function () {
    let counter = 0;
    
    return function () {
        counter += 1;
        counter_space.innerHTML = counter;
        return counter;
    };

})();

counter_btn.addEventListener("click", ()=>{
    add();
});

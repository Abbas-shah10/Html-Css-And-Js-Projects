// set a count
let count = 0


// set value and btns
const Value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }else if(styles.contains("increase")){
      count++;
    }
    else{
      count = 0;
    }
    if(count > 0){
      Value.style.color = "green"
    }
    else if(count < 0){
      Value.style.color = "red"
    }
    else{
      Value.style.color = "#222222"
    }
    Value.textContent = count;
  })
})



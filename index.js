const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id)
  //Get all individual letters from the element with given id 
  const text = element.innerText.split("");
  
  //reset inner text so we can rebuild it using the text variable
  element.innerText = "";
  
  //go through each letter in text
  text.forEach((value, index) => {
    //create a new span
    const outer = document.createElement("span");
    //with class outer which 
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("linkedin-link");
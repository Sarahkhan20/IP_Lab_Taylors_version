function* generatorFunc() {
    yield 100;
    yield 200;
  }
  
  const generator = generatorFunc();
  
  const step1 = generator.next(); 
  console.log(step1);     
  
  const step2 = generator.next();
  console.log(step2);    
  
  const step3 = generator.next();
  console.log(step3);       
     
  
// two fingers touch distance 
window.addEventListener('touchstart',start );
function start(e){
    if(e.touches.length==2){
   let [w1,h1]=[e.touches[0].clientX,e.touches[0].clientY];
  let [w2,h2]=[e.touches[1].clientX,e.touches[1].clientY];
  let tempDistance=(w1-w2)**2 + (h1-h2)**2;
  let currentDistance=Math.sqrt(tempDistance);
  console.log(currentDistance + 'px');
  
  }
    
}
  
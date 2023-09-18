const body = document.querySelector("body");
let cayPlay = false;

body.addEventListener("click", async ()=>{
  if(cayPlay === true){
    return false;
  }
  let cardNum = getRandomNumbers(1, 10, 10);
  for(let i=0;i<cardNum.length;i++){
    console.log(`.card${cardNum[i]} .back`)
    document.querySelector(`.card${cardNum[i]} .back`).innerHTML = `Back!${i+1}`
  }
  let picks = getRandomNumbers(1, 10, 3);
  cayPlay = true;
  for(let i=1;i<=10;i++){
    document.querySelector(`.card${i}`).classList.add(`card${i}Active`)
  }
  await waittings(1000);
  for(let i=0;i<picks.length;i++){
    document.querySelector(`.card${picks[i]}`).classList.add(`card${picks[i]}pickup`);
    await waittings(1000);
  }
  await waittings(1000);
  document.querySelector(`.card${picks[0]}`).classList.remove(`card${picks[0]}pickup`);
  document.querySelector(`.card${picks[0]}`).classList.remove(`card${picks[0]}Active`);
  document.querySelector(`.card${picks[0]}`).classList.add("forward1");
  await waittings(300);
  document.querySelector(`.card${picks[0]}`).classList.add("forward12");
  await waittings(300);
  document.querySelector(`.card${picks[1]}`).classList.remove(`card${picks[1]}pickup`);
  document.querySelector(`.card${picks[1]}`).classList.remove(`card${picks[1]}Active`);
  document.querySelector(`.card${picks[1]}`).classList.add("forward2");
  await waittings(300);
  document.querySelector(`.card${picks[1]}`).classList.add("forward22");
  await waittings(300);
  document.querySelector(`.card${picks[2]}`).classList.remove(`card${picks[2]}pickup`);
  document.querySelector(`.card${picks[2]}`).classList.remove(`card${picks[2]}Active`);
  document.querySelector(`.card${picks[2]}`).classList.add("forward3");
  await waittings(300);
  document.querySelector(`.card${picks[2]}`).classList.add("forward32");
  await waittings(1000);
  for(let i=0;i<picks.length;i++){
    document.querySelector(`.card${picks[i]} .content`).classList.add("active");
    await waittings(1000);
  }
})



function waittings(time){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve();
    }, time);
  });
}


function getRandomNumbers(start, end, count) {
  const numbers = Array.from({ length: end - start + 1 }, (v, i) => i + start);
  const result = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
  return result;
}
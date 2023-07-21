
let stitleArr = [];
let urlArr = [];
let cnt = 0;

fetch('https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json')
  .then(res=>{
    return res.json();
  }).then(data=>{
    let results=data.result.results;
    for(let i=0;i<results.length;i++){
      stitleArr.push(results[i].stitle)
      urlSplit = results[i].file.split('http');
      url = "http"+urlSplit[1]
      // console.log(url)
      urlArr.push(url)
    };

    load();
  })

  
let load =()=>{
  const gridContainer = document.querySelector('.grid-container')
  let promotionNum = 3
  for (let i = 1; i <= promotionNum; i++){
    const promotion = document.createElement("div");
    promotion.className = `promotion-${i}`

    const newImg = document.createElement('img');
    newImg.setAttribute('src',urlArr[cnt]);
    
    const newDiv = document.createElement('div');
    newDiv.className = 'title-container-top';

    const newP = document.createElement('p');
    newP.textContent=stitleArr[cnt];
    cnt++;

// 從小到大塞入 // 從小到大塞入 // 從小到大塞入 // 從小到大塞入 
    newDiv.appendChild(newP);
    promotion.appendChild(newImg);
    promotion.appendChild(newDiv);
    gridContainer.appendChild(promotion)
  }

  let cardNum=12
  for(let i=0 ;i<cardNum;i++){
    const cardContainer = document.createElement("div");
    cardContainer.className='card-container';

    const newImg = document.createElement('img');
    newImg.setAttribute('src',urlArr[cnt]);

    const newDiv = document.createElement('div');
    newDiv.className = 'title-container';

    const newP = document.createElement('p');
    newP.textContent=stitleArr[cnt];
    cnt++;

    newDiv.appendChild(newP);
    cardContainer.appendChild(newImg);
    cardContainer.appendChild(newDiv);
    gridContainer.appendChild(cardContainer)
  }
}

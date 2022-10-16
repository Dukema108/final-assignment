const colorDic = ['#DC4522','#FF8A19','#FFC519'];
let startBtn = document.getElementById("start");
let sourceCounts =[2741552,172547,151649,89459];
let staticsNumber = {
    "Total vaccine":63807197,
    "Last week": 55421,
    "People aged 16+ with at least 1 dose":20039901,
    "People aged 16+ with 2 doses":19759583,
    "PPeople aged 16+ with 3 doses":14248505,
    "People aged 16+ with 4 doses":4932522
}

window.onload =function(){
    buildSourceData(staticsNumber);
}



const areaName =['England','wales','The Scottish','Northern Ireland'];
let weightObj = [];
let wrapBox = document.getElementById('wrap');
function buildSourceData(source){
    for(let i in source){
        let divEle = document.createElement('div');
        divEle.className ="line-item";
        let innerEle1 = document.createElement('span');
        let innerEle2 = document.createElement('span');
        innerEle1.innerHTML = "guess the numbers,Click to see the answer!";
        let cirCleEle ="";
        innerEle2.onclick = function(){
            if(cirCleEle){
                innerEle2.removeChild(cirCleEle);
            }else{
                cirCleEle = document.createElement("span");
                cirCleEle.className ="circle-block";
                cirCleEle.innerHTML = i;
                innerEle2.appendChild(cirCleEle);
            }
        }
        innerEle2.innerHTML = staticsNumber[i];
        innerEle1.style.width = "65%";
        divEle.appendChild(innerEle1);
        divEle.appendChild(innerEle2);
        wrapBox.appendChild(divEle)
    }
}

let sourceData = [
    {
      name: "1",
      group: "Children aged 6 months to under 5 years who are at greater risk of severe disease",
      awardStatus: "Approved",
      type: "Yes",
      desc: "Children aged 6 months to under 5 years who are at greater risk of severe disease are also eligible for COVID-19 vaccination. ",
    },
    {
      name: "2",
      group: "everyone aged 5 years and older",
      awardStatus: "Approved",
      type: "Yes",
      desc: "ATAGI recommends that everyone aged 5 years and older gets a COVID-19 vaccine to help protect against COVID-19. ",
    }, {
      name: "3",
      group: "Children who turn 6 or 12 between doses",
      desc:"A COVID-19 booster dose is recommended for people aged 12-15 who:1. are severely immunocompromised, or 2.have a disability with significant or complex health needs, or 3.have severe, complex, or multiple health conditions that increase the risk of severe COVID-19.",
      type: "Yes",
    }
  ]
  
  let tableWrap = document.getElementById("myTable");
  
  function initHeader() {
    let trheader = document.createElement("tr");
    trheader.id = "cloums";
    trheader.innerHTML = " <th></th> <th>No.</th> <th>Group</th> <th>Sign a consent form</th> ";
    tableWrap.appendChild(trheader)
  }
  initHeader();
  rebuildTable(sourceData);
  
  function rebuildTable(source, addFlag) {
    source.forEach((item, index) => {
      let trAdd = document.createElement("tr");
      let td0 = document.createElement("td");
      let img0 = document.createElement("img");
      img0.src = "assets/down.png";
      img0.style.width = '25px';
      img0.onclick = function () {
        let target = document.getElementById(item.name);
        if (target.style.display === "none") {
          target.style.display = ""
        } else {
          target.style.display = 'none'
        }
      }
      td0.appendChild(img0);
      let td1 = document.createElement('td');
      td1.innerHTML = item.name;
      let td2 = document.createElement('td');
      td2.innerHTML = item.group;
      let td3 = document.createElement('td');
      td3.innerHTML = item.type;
  
      trAdd.appendChild(td0);
      trAdd.appendChild(td1);
      trAdd.appendChild(td2);
      trAdd.appendChild(td3);
      let trAdd1 = document.createElement("tr");
      trAdd1.className = "dropDownTextArea ";
      trAdd1.id = item.name;
      tdAdd1 = document.createElement('td');
      tdAdd1.colSpan = "8";
      tdAdd1.innerHTML = item.desc;
      trAdd1.style.display = "none";
      trAdd1.style.padding = "10px";
      trAdd1.appendChild(tdAdd1);
      tableWrap.appendChild(trAdd)
      tableWrap.appendChild(trAdd1);
    })
    addFlag = true;
    return addFlag;
  }
  let addBtn = document.getElementById("add");
  addBtn.onclick = function () {
    if(sourceData.length ===4){
        window.alert("The data is loaded");
        return
    }
    let curData = {
      name: (sourceData.length + 1),
      group: "Pregnant and breastfeeding women",
      desc: "If you are pregnant and test positive for COVID-19 you have a higher risk of certain complications.",
      type: "No",
    }
    sourceData.push(curData);
    rebuildTable([curData], addFlag = false);
  }


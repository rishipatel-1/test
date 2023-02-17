const guideSection = document.getElementById('guide');
const watchSection = document.getElementById('watches');
const acessoriesSection = document.getElementById('accessories');
const serviceSection = document.getElementById('service');

guideSection.onclick = ()=>{
 sectionChange();
}
watchSection.onclick = ()=>{
 sectionChange();
}
acessoriesSection.onclick = ()=>{
 sectionChange();   
}
serviceSection.onclick = ()=>{
 sectionChange();
}

function sectionChange(){
  $('.collapse').collapse('hide');
}

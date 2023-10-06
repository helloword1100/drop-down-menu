const selectFeild=document.getElementById('selectfeild');
const selectText=document.getElementById('selecttext');
const options=document.getElementsByClassName('options');
const menu=document.getElementById('show_menu');
const show=document.getElementById('list');


for (var option of options)
{
    option.onclick=function(){
        selectText.innerHTML=this.innerText
    }
}


menu.addEventListener('click',function(){

  show.classList.toggle('hidden');
  selectText.innerHTML='Select social media';

})
window.onload = function(){
  var maxBtn = document.getElementById("max");
  maxBtn.onclick = function(){
    maxFun();//调用放大函数
  }
  var img = document.getElementById("myImage")
  var maxWidth = img.width*2; //放大宽度的极限值
  var maxHeight = img.height*2; //放大高度的极限值
  function maxFun(){
    var endWidth = img.width*1.3; //每次点击后的宽度
    var endHeight = img.height*1.3; //每次点击后的高度
    var maxTimer = setInterval(function(){
      if(img.width < endWidth){
        if(img.width < maxWidth){
          img.width = img.width*1.05;
          img.height = img.height*1.05;
        }else{
          alert("已经放大到最大值了");
          clearInterval(maxTimer);
        }  
      }else{
        clearInterval(maxTimer);
      }  
    }, 20);
  }
}

window.onload = function(){
  //执行放大方法
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
      if(img.width<endWidth && img.height<endHeight){
        if(img.width<maxWidth && img.height<maxHeight){
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

  //执行缩小方法
  var minBtn = document.getElementById("min");
  minBtn.onclick = function(){
    minFun(); //调用缩小函数
  }
  var minWidth = img.width*0.2;
  var minHeight = img.width*0.2;
  function minFun(){
    var endWidth = img.width*0.7;
    var endHeight = img.height*0.7;
    var minTimer = setInterval(function(){
      if(img.width>endWidth && img.height>endHeight){
        if(img.width>minWidth && img.height>minHeight){
          img.width = img.width*0.9;
          img.heigth = img.height*0.9;
        }else{
          alert("已经缩小到最小了");
          clearInterval(minTimer);
        }
      }else{
        clearInterval(maxTimer);
      }
    },20);
  }
}

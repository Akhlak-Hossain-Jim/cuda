$(function(){
      $('.circlechart').circlechart();
    });
$(document).ready(function(){

  //waypoint start
  $(".js_service_section").waypoint(function(direction){
    if(direction=="down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
  })


  //waypoint finished

  var mixer = mixitup('.services_section5')
});
function openNav(){
  document.querySelector("#myNav").style.width = "100%";
}
function closeNav(){
  document.querySelector("#myNav").style.width = "0%";
}
    
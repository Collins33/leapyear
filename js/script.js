var leapyear=function(year){
  if (year%4===0){
    return true;
  }
  else{
    return false;
  }

};



$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year=parseInt($("input#year").val());
    var results= leapyear(year);
    $("#results").text(results);
  })
});

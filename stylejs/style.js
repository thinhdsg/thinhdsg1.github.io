

window.onload = function()
{
    var abc = screen.availWidth;
    if (abc < 768) {
    	document.getElementById('header-top').style.display = 'none';
        document.getElementById('menu-txt-list').style.display = 'none';

    }
    else
    {
        document.getElementById('header-top').style.display = 'block';	
        document.getElementById('menu-txt-list').style.display = 'block';
    }
};




var a = document.getElementById('picture-img');
var b = document.getElementById('content-text-h2');

function getimaget1(){
	a.src = "../image/massage-da-nong_52899887d012446baa068beddb851a44_large.webp";
	b.innerHTML = 'Dịch vụ công nghệ cao';
	b.style.fontSize = "20px";
}

// document.getElementById("dichvucongnghecao").addEventListener('onclick',getimaget1())


function getimaget2(){
    a.src = "../image/white-skin_63fce40852fe49dd853dba629e340bce_large.webp";
    b.innerHTML = 'Thư giãn và làm đẹp';
    b.style.fontSize = "20px";
}

// document.getElementById("thugianvalamdep").addEventListener('onclick',getimaget2())

function getimaget3(){
	a.src = "../image/long-may_dccea2cbec0f49fb8ebfb9049f4215a2_large.webp";
	b.innerHTML = 'Vật lý trị liệu';
	b.style.fontSize = "20px";
}

// document.getElementById("vatlytrilieu").addEventListener('onclick',getimaget3())

$( document ).ready(function() {    
$('.btn-number').click(function(e){        
    e.preventDefault();                
var fieldName = $(this).attr('data-field');        
var type      = $(this).attr('data-type');        
var input = $("input[name='"+fieldName+"']");        
var currentVal = parseInt(input.val());        
if (!isNaN(currentVal)) {            
if(type == 'minus') {                
var minValue = parseInt(input.attr('min'));                 
if(!minValue) minValue = 1;                
if(currentVal > minValue) {                    
input.val(currentVal - 1).change();                
}                 
if(parseInt(input.val()) == minValue) {                    
$(this).attr('disabled', true);                
}                
} 
else if(type == 'plus') {                
var maxValue = parseInt(input.attr('max'));                
if(!maxValue) maxValue = 10;                
if(currentVal < maxValue) {                    
input.val(currentVal + 1).change();                
}                
if(parseInt(input.val()) == maxValue) {                    
$(this).attr('disabled', true);                
}                
}        
} 
else {            
input.val(0);        
}    
});    
$('.input-number').focusin(function(){       
$(this).data('oldValue', $(this).val());    
});    
$('.input-number').change(function() {                
var minValue =  parseInt($(this).attr('min'));        
var maxValue =  parseInt($(this).attr('max'));        
if(!minValue) minValue = 1;        
if(!maxValue) maxValue = 10;        
var valueCurrent = parseInt($(this).val());                
var name = $(this).attr('name');        
if(valueCurrent >= minValue) {            
$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')        
} 
else {            
alert('Sorry, the minimum value was reached');            
$(this).val($(this).data('oldValue'));        
}        
// if(valueCurrent >= maxValue) {            
// $(".btn-number[data-type='plus'][data-field='"+ name +"']").removeAttr('disabled')        
// } else {            
// alert('Sorry, the maximum value was reached');            
// $(this).val($(this).data('oldValue'));        
// }                    
});     
$(".input-number").keydown(function (e) {                       
if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {                    
return;            
}            
// Ensure that it is a number and stop the keypress            
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {                
e.preventDefault();            
}    
});
});
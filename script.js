var layer1= document.getElementById('layer1')
scroll= window.pageYOffset;
document.addEventListener('scroll', 
function (e){
var offset = window.pageYOffset;
scroll = offset;
layer1.style.width = (50 + scroll/4)  + '%';
layer1.style.left = -scroll/2.5  + '%';

});
var layer2= document.getElementById('layer2')
scroll= window.pageYOffset;
document.addEventListener('scroll', 
function (e){
var offset = window.pageYOffset;
scroll = offset;
layer2.style.width = (50 + scroll/4)  + '%';
layer2.style.right = -scroll/2.5  + '%';
});

var totalCount = 6;
function ChangeIt() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/'+num+'.jpg';
document.body.style.backgroundRepeat = "no-repeat";
}
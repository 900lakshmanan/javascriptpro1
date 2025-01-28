var sname=prompt("enter the Name")
var sid=parseInt(prompt("enter the id "))
var Tm=parseInt(prompt("enter the tm "))
var  em=parseInt(prompt("enter the em"))
var mm=parseInt(prompt("enter the mm"))
var sm=parseInt(prompt("enter the sm"))
var ss=parseInt(prompt("enter the ssm"))
var total=Tm+em+mm+sm+ss
var precentage=total*100/500


document.write(" Name :"+sname+"<br>")
document.write(" Id :"+sid+"<br>")
document.write("Tamil :"+Tm+"<br>")
document.write("English :"+em+"<br>")
document.write("Maths :"+mm+"<br>")
document.write("Science :"+sm+"<br>")
document.write("SocialScience:"+ss+"<br>")
document.write("Totel Mark :"+total+"<br>")
document.write("Grade Precentage :"+precentage)

if(total<500)
{
    document.write("A Grade")
}
else if(total<450)
{
    document.write("B Grade")
}
else if(total<400)
{
    document.write("C Grade")
}
else if(total<350)
{
    document.write("D Grade")
}
else if(total<300)
{
    document.write("E Grade")
}
else(total<200)
{
    document.write("F Grade")
}
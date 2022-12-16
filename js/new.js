var x=document.createElement("INPUT")
x.setAttribute("type","text")
x.setAttribute("placeholder","enter the number")
x.setAttribute("id","number")
document.body.appendChild(x);
document.write("<br>");
document.write("<br>");


var z=document.createElement("button")
z.setAttribute("onclick","armstrong()")
z.innerHTML	="check"
document.body.appendChild(z);
document.write("<br>");
document.write("<br>"); 




function armstrong() {
   var number = document.getElementById("number").value;
	sum=0;
	temp=number;
	a=number;
	count=0;
	while(a>0)
	{
		var rem=a%10;
		a=(a-rem)/10;
		count++;
	}
	while(temp>0)
	{
	rem=temp%10;
	sum=sum+rem**count;
	temp=parseInt(temp/10);
	}
	if(number==sum)
	{
	document.write("given number is armstrong number")
	}
	else
	{
	document.write("given number is not armstrong number")
    }
}

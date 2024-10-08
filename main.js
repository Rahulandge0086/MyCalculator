var arr=[];
var count=0,m=0;
var temp_n=0;
var op_no=0;
var ip1=0;
var ip2=0;
var TriSet=0;
var TriEqu=0;

const selectElement = document.querySelector('select');
      selectElement.addEventListener('change', (event) => {
         if(event.target.value == "sin(x)")
         {
            document.querySelector(".ioBox").innerHTML = "sin("+"&nbsp&nbsp&nbsp";
            TriSet++;
            TriEqu=1;
         }
         if(event.target.value == "cos(x)")
         {
            document.querySelector(".ioBox").innerHTML = "cos("+"&nbsp&nbsp&nbsp";
            TriSet++;
            TriEqu=2;
         }
         if(event.target.value == "tan(x)")
         {
         document.querySelector(".ioBox").innerHTML = "tan("+"&nbsp&nbsp&nbsp";
            TriSet++;
            TriEqu=3;
         }
      });

for(var y=0;y<document.querySelectorAll(".but").length;y++)
{
    document.querySelectorAll(".but")[y].addEventListener("click",function(event){
      if(this.innerHTML == "(-"){
         document.querySelector(".ioBox").innerHTML = "-"+"&nbsp&nbsp&nbsp";
         m++;
         count++;
       }
      if(this.innerHTML != "*" && this.innerHTML != "+" && this.innerHTML != "/" && this.innerHTML != "-" && this.innerHTML != "%" && this.innerHTML != "(-")
      {
         var x=Number(this.innerHTML);
         temp_n=temp_n*10+x;
         if(m == 0){
            document.querySelector(".ioBox").innerHTML = temp_n+"&nbsp&nbsp&nbsp";
         }
         else
         {
            document.querySelector(".ioBox").innerHTML = -temp_n+"&nbsp&nbsp&nbsp";
         }
      }
      else if(this.innerHTML != "(-"){
         m=0;
         op_no=add_operator_color(this.innerHTML);
         temp_n=0;
      }

      if(this.innerHTML == "C"){
         
            remove_operator_color(op_no);
            arr.length = 0;
            document.querySelector(".ioBox").innerHTML = "Enter number"+"&nbsp&nbsp&nbsp";
            ip1=0;
            ip2=0;
            temp_n=0;
         
         
      }
      if(this.innerHTML != "=" && this.innerHTML != "C" && this.innerHTML != "(-")
      {
         arr.push(this.innerHTML);
      }
      else{
            if(TriSet == 0)
            {
               remove_operator_color(op_no);
               var i=0;
               console.log(arr);
               while(arr[i] != "*" && arr[i] != "+" && arr[i] != "/" && arr[i] != "-" && arr[i] != "%" && i<arr.length)
               {
                  var c=Number(arr[i]);
                  ip1=ip1*10+c;
                  i++;
               }
               var op=arr[i];
               i++;
               while(i<arr.length)
               {
                  var d=Number(arr[i]);
                  ip2=ip2*10+d;
                  i++;
               }
               if(count==1)
               {
                  ip1=-ip1;
               }
               calculate(ip1,ip2,op);
            }
            else{
               if(this.innerHTML != "C" && this.innerHTML != "(-")
               {
                  console.log(arr);
                  console.log(TriEqu);
                  var l=0;
                  var z=0;
                  while(l<arr.length)
                     {
                        var r=Number(arr[l]);
                        z=z*10+r;
                        l++;
                     }
                  if(TriEqu == 1)
                  {
                     z = z * Math.PI/180;
                        if(count==1)
                        {
                           z=-z;
                        }
                     calculate(0,z,"sin");
                  }
                  else if(TriEqu == 2)
                  {
                     z = z * Math.PI/180;
                        if(count==1)
                        {
                           z=-z;
                        }
                     calculate(0,z,"cos");
                  }
                  else if(TriEqu == 3)
                  {
                     z = z * Math.PI/180;
                        if(count==1)
                        {
                           z=-z;
                        }
                     calculate(0,z,"tan");
                  }
               }
               
            }
      }
            
    });
}
   
function calculate(a,b,k){
   console.log(k);
   switch(k){
      case "+":document.querySelector(".ioBox").innerHTML = a+b+"&nbsp&nbsp&nbsp";
               m=0;
               count=0;
               arr.length = 0;
               ip1=0;
               ip2=0;
               temp_n=0;          
                arr.push(a+b);
          break;
      case "-":document.querySelector(".ioBox").innerHTML = a-b+"&nbsp&nbsp&nbsp"
               m=0;
               count=0; 
               arr.length = 0;
                ip1=0;
                ip2=0;
                temp_n=0;        
                arr.push(a-b);
          break;
      case "*":document.querySelector(".ioBox").innerHTML = a*b+"&nbsp&nbsp&nbsp";
               m=0;
               count=0;          
               arr.length = 0;
                ip1=0;
                ip2=0;
                temp_n=0;      
                arr.push(a*b);
            break;
      case "/":document.querySelector(".ioBox").innerHTML = a/b+"&nbsp&nbsp&nbsp";
               m=0;
               count=0;
                arr.length = 0;  
                ip1=0;
                ip2=0;
                temp_n=0;    
                arr.push(a/b);
            break;
      case "%":document.querySelector(".ioBox").innerHTML = a%b+"&nbsp&nbsp&nbsp";
               m=0;
               count=0;
                arr.length = 0;  
                ip1=0;
                ip2=0;
                temp_n=0;    
                arr.push(a%b);
            break;
      case "sin":document.querySelector(".ioBox").innerHTML = Math.sin(b).toFixed(4)+"&nbsp&nbsp&nbsp";
                  TriEqu=0;
                  TriSet = 0;
                  m=0;
                  count=0;
                  arr.length = 0;  
                  temp_n=0;    
                  break;
      case "cos":document.querySelector(".ioBox").innerHTML = Math.cos(b).toFixed(4)+"&nbsp&nbsp&nbsp";
                  TriEqu=0;
                  TriSet = 0;
                  m=0;
                  count=0;
                  arr.length = 0;  
                  temp_n=0;    
                  break;
      case "tan":if(Math.tan(b)>100000){
                        document.querySelector(".ioBox").innerHTML ="Not Defined"+"&nbsp&nbsp&nbsp";
                  }
                  else{
                     document.querySelector(".ioBox").innerHTML = Math.tan(b).toFixed(4)+"&nbsp&nbsp&nbsp";
                  }
                  TriEqu=0;
                  TriSet = 0;
                  m=0;
                  count=0;
                  arr.length = 0;
                  temp_n=0;    
                  break;
     }
}

function add_operator_color(k)
{
   switch(k){
      case "+":document.querySelector(".operator1").classList.add("ope");
                  return 1;
          break;
      case "-":document.querySelector(".operator2").classList.add("ope");
                  return 2;
          break;
      case "*":document.querySelector(".operator3").classList.add("ope");
                  return 3;
          break;
      case "/":document.querySelector(".operator5").classList.add("ope");
                  return 5;
          break;
      case "%":document.querySelector(".operator6").classList.add("ope");
                  return 6;
         break;
     }
}

function remove_operator_color(p)
{
   switch(p){
      case 1:document.querySelector(".operator1").classList.remove("ope");
          break;
      case 2:document.querySelector(".operator2").classList.remove("ope");
          break;
      case 3:document.querySelector(".operator3").classList.remove("ope");
          break;
      case 5:document.querySelector(".operator5").classList.remove("ope");
          break;
      case 6:document.querySelector(".operator6").classList.remove("ope");
          break;
     }
}


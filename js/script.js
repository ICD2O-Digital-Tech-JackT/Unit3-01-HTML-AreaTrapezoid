function Display(Area){
  if(Area==0){
     document.getElementById("Output").innerHTML="Please enter valid numbers"
  } else{
     document.getElementById("Output").innerHTML="The area of this trapezoid is: "+Area;
  } 
}

function Calculate(){
  let Height = document.getElementById("Height").value;
  let SideA = document.getElementById("SideA").value;
  let SideB = document.getElementById("SideB").value;
  let Area = (SideA + SideB) * Height / 2;
  Display(Area);
}
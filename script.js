function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radius=document.getElementById("radius").value;
	if( radius >=0)
	{
		var volume= (4/3) * Math.PI * Math.pow(radius,3);
		var res =parseFloat(volume.toFixed(4));
		document.getElementById("volume").value=res;
	}
	else
	{
		alert("NaN");
		document.getElementById("volume").value="NaN";
	}
	
  
} 

window.onload = function () {
document.getElementById('MyForm').addEventListener("submit",volume_sphere); 
}
	

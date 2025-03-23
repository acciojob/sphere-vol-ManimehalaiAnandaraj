function volume_sphere() {
    //Write your code here
	const radius=document.getElementById("radius").value;
	if(!isNaN(radius) && radius >=0)
	{
		const volume= (4/3) * Math.PI*Math.pow(radius,3);
		return parseFloat(volume.toFixed(4));
	}
	else
	{
		alert("NaN");
		document.getElementById("volume").value="";
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

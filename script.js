function volume_sphere() {
    //Write your code here
	const radius=document.getElementById("radius").value;
	if( radius >=0)
	{
		const volume= (4/3) * Math.PI * Math.pow(radius,3);
		const res =parseFloat(volume.toFixed(4));
		document.getElementById("]volume").value=res;
	}
	else
	{
		alert("NaN");
		document.getElementById("volume").value="invalid";
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

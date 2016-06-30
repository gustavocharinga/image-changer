var myImage=document.querySelector('img');

myImage.onmouseover=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='Glendalough-Upper-Lake.jpg'){
		myImage.setAttribute('src','acantilado-asturias-100px.jpg');
	}else{
		myImage.setAttribute('src','Glendalough-Upper-Lake.jpg');
	}

}
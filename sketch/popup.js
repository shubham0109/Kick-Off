var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// all the buttons
var btn = document.getElementsByTagName('button');
btn[0].addEventListener("click", epl); 
btn[1].addEventListener("click", bundesliga);
btn[2].addEventListener("click", laliga);
btn[3].addEventListener("click", serie_a);
btn[4].addEventListener("click", ligue1);

// NEXT FIXTURES
/*$("#btn0").click(function(){
    $("#div0").toggle("slow");
});*/

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//PRIMIER LEAGUE
function epl(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/445/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		  clearBox();
		//  var iDiv = document.createElement('div');
		  function clearBox()
		  {
		    	document.getElementsByTagName('div')[4].innerHTML = "";
		    	document.getElementsByTagName('div')[3].innerHTML = "";
		  }

		  for (var i = 100; i < size; i++){

		  	if (response.fixtures[i].status === 'TIMED'){
		  		
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);


				var home = response.fixtures[i].homeTeamName;
				var away = response.fixtures[i].awayTeamName;
				var day = response.fixtures[i].date.substr(8,2);
				var month = response.fixtures[i].date.substr(5,2);
				//var iDiv = document.getElementsByTagName('div')[1]//.appendChild(iDiv);
		  		//var string = " ";
		  		//iDiv.innerHTML = string;
				//var string = "<table>" + home + "&emsp;" + day + '/' + month + "&emsp;"+ away + "</table>";
				var iDiv = document.createElement('div');
				iDiv.id = 'block';
				iDiv.className = 'block';
				document.getElementsByTagName('div')[4].appendChild(iDiv);

				var string = "<table style='width:100%'><tr><td width='40%'>"+ home + "</td>" +
    							"<td width='20%'>" + day + "/" + month + "</td>" +
    							"<td width='40%'>" + away + "</td></tr></table>"

				iDiv.innerHTML = string;
		  		
		  		j++;

		  	}
		  	if (j === 10)break;
		  	
		  }
		  
		  var ihead = document.createElement('h2');
		  document.getElementsByTagName('div')[3].appendChild(ihead);
		  ihead.innerHTML = "<img src='epl.jpg' width='250' height='100'>"
		  modal.style.display = "block";
	}); 
}

//BUNDESLIGA
function bundesliga(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/452/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		  clearBox();
		  function clearBox()
		  {
		    	document.getElementsByTagName('div')[4].innerHTML = "";
		    	document.getElementsByTagName('div')[3].innerHTML = "";
		  }

		  for (var i = 100; i < size; i++){

		  	if (response.fixtures[i].status === 'TIMED'){
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);
		  		j++;
		  	
			  	var home = response.fixtures[i].homeTeamName;
				var away = response.fixtures[i].awayTeamName;
				var day = response.fixtures[i].date.substr(8,2);
				var month = response.fixtures[i].date.substr(5,2);
				var iDiv = document.createElement('div');
				iDiv.id = 'block2';
			//	iDiv.className = 'block';
				document.getElementsByTagName('div')[4].appendChild(iDiv);

				var string = "<table style='width:100%'><tr><td width='40%'>"+ home + "</td>" +
    							"<td width='20%'>" + day + "/" + month + "</td>" +
    							"<td width='40%'>" + away + "</td></tr></table>"

				iDiv.innerHTML = string;
			}
		  	if (j === 9)break;
		  }
		  var ihead = document.createElement('h2');
		  document.getElementsByTagName('div')[3].appendChild(ihead);
		  ihead.innerHTML = "<img src='bundesliga.jpg' width='250' height='100'>"

		  modal.style.display = "block";
	}); 
}


//LALIGA
function laliga(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/455/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		  clearBox();
		  function clearBox()
		  {
		    	document.getElementsByTagName('div')[4].innerHTML = "";
		    	document.getElementsByTagName('div')[3].innerHTML = "";
		  }

		  for (var i = 100; i < size; i++){

		  	if (response.fixtures[i].status === 'TIMED'){
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);
		  		j++;

		  		var home = response.fixtures[i].homeTeamName;
				var away = response.fixtures[i].awayTeamName;
				var day = response.fixtures[i].date.substr(8,2);
				var month = response.fixtures[i].date.substr(5,2);
				var iDiv = document.createElement('div');
				iDiv.id = 'block';
				iDiv.className = 'block';
				document.getElementsByTagName('div')[4].appendChild(iDiv);

				var string = "<table style='width:100%'><tr><td width='40%'>"+ home + "</td>" +
    							"<td width='20%'>" + day + "/" + month + "</td>" +
    							"<td width='40%'>" + away + "</td></tr></table>"

				iDiv.innerHTML = string;
		  	}
		  	if (j === 10)break;  	
		  }
		  var ihead = document.createElement('h2');
		  document.getElementsByTagName('div')[3].appendChild(ihead);
		  ihead.innerHTML = "<img src='la_liga.jpg' width='250' height='150'>"

		  modal.style.display = "block";
	}); 
}

//SERIE A
function serie_a(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/456/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		  clearBox();
		  function clearBox()
		  {
		    	document.getElementsByTagName('div')[4].innerHTML = "";
		    	document.getElementsByTagName('div')[3].innerHTML = "";
		  }

		  for (var i = 100; i < size; i++){

		  	if (response.fixtures[i].status === 'TIMED'){
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);
		  		j++;

		  		var home = response.fixtures[i].homeTeamName;
				var away = response.fixtures[i].awayTeamName;
				var day = response.fixtures[i].date.substr(8,2);
				var month = response.fixtures[i].date.substr(5,2);
				var iDiv = document.createElement('div');
				iDiv.id = 'block';
				iDiv.className = 'block';
				document.getElementsByTagName('div')[4].appendChild(iDiv);

				var string = "<table style='width:100%'><tr><td width='40%'>"+ home + "</td>" +
    							"<td width='20%'>" + day + "/" + month + "</td>" +
    							"<td width='40%'>" + away + "</td></tr></table>"

				iDiv.innerHTML = string;
		  	}
		  	if (j === 10)break;	
		  }
		  var ihead = document.createElement('h2');
		  document.getElementsByTagName('div')[3].appendChild(ihead);
		  ihead.innerHTML = "<img src='serie_a.jpg' width='250' height='150'>"

		  modal.style.display = "block";
	}); 
}

//LIGUE1
function ligue1(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/450/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		  clearBox();
		  function clearBox()
		  {
		    	document.getElementsByTagName('div')[4].innerHTML = "";
		    	document.getElementsByTagName('div')[3].innerHTML = "";
		  }

		  for (var i = 100; i < size; i++){

		  	if (response.fixtures[i].status === 'TIMED'){
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);
		  		j++;

		  		var home = response.fixtures[i].homeTeamName;
				var away = response.fixtures[i].awayTeamName;
				var day = response.fixtures[i].date.substr(8,2);
				var month = response.fixtures[i].date.substr(5,2);
				var iDiv = document.createElement('div');
				iDiv.id = 'block';
				iDiv.className = 'block';
				document.getElementsByTagName('div')[4].appendChild(iDiv);

				var string = "<table style='width:100%'><tr><td width='45%'>"+ home + "</td>" +
    							"<td width='10%'>" + day + "/" + month + "</td>" +
    							"<td width='45%'>" + away + "</td></tr></table>"

				iDiv.innerHTML = string;
		  	}
		  	if (j === 10)break; 	
		  }
		  var ihead = document.createElement('h2');
		  document.getElementsByTagName('div')[3].appendChild(ihead);
		  ihead.innerHTML = "<img src='ligue_1.jpg' width='250' height='100'>"

		  modal.style.display = "block";
	}); 
}


//UEFA CHAMPIONS LEAGUE
/*function run(){
	$.ajax({
		  headers: { 'X-Auth-Token': 'b5599fb2c0de46f9b997e8711ba0cf2b' },
		  url: 'http://api.football-data.org/v1/competitions/464/fixtures',
		  dataType: 'json',
		  type: 'GET',
		}).done(function(response) {
		  
		  var size = response.fixtures.length;
		  var j = 0;
		//  console.log(response.)
		  for (var i = 0; i < size; i++){

		  	if (response.fixtures[i].status === 'SCHEDULED'){
		  		console.log(response.fixtures[i].homeTeamName + "		"+ response.fixtures[i].date.substr(8,2) 
		  			+ "/" + response.fixtures[i].date.substr(5,2) +"	 " + response.fixtures[i].awayTeamName);
		  		j++;
		  	}
		  	if (j === 16)break;

		  	
		  }
		  
	}); 
}*/
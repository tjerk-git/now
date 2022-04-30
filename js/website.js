function ToggleMenu() {
  let menu = document.getElementById('menu_container');
  let menu_button = document.getElementById('menu_button');
  
  if(menu.dataset.state == "closed"){
	menu.dataset.state = 'open';
	menu.classList.add("open");
	
	menu_button.dataset.state = 'open';
	menu_button.classList.add("open");
   // setInterval(function () {
   //   menu_button.dataset.state = 'open';
   //   menu_button.classList.add("open");
   // }, 600);

  }
  else{
	  // close it
	  menu.dataset.state = 'closed';
	  menu.classList.remove("open");
	  menu_button.dataset.state = 'closed';
	  menu_button.classList.remove("open");
  } 
}
function getuser(){

 $.ajax({
    method: 'GET',
    url: "https://crossorigin.me/https://github.com/",
    headers: {
     'Cache-Control':'max-age=0',		      
     'Upgrade-Insecure-Requests':'1',
     'Accept':'text/html,',
     'Accept-Language':'r-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4',
     'Content-Type': 'text/html,application/json;charset=UTF-8',
     }		      
 
   }).done(function(data) { 
   alert(data);
});
}

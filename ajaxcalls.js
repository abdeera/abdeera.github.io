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
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
     'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
     'Access-Control-Max-Age': '1728000'
      }		      
 
   }).done(function(data) { 
   alert(data);
});
}

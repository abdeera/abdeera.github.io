function getuser(){

 $.ajax({
    method: 'GET',
    url: "https://www.github.com/",
    headers: {
    'Cache-Control':'max-age=0',
    'Upgrade-Insecure-Requests':'1',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language':'r-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4'
    }
   }).done(function(data) { 
   alert(data);
});
}

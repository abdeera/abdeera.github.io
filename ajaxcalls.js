function getuser(){

 $.ajax({
    method: 'GET',
    url: "https://github.com/"
   }).done(function(data) { 
   alert(data);
});
}

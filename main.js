$(function(){
  var id = 'YOUR ID';
  var pass = 'YOUR PASSWORD';

  $('input#user').val(id);
  $('input#password').val(pass);

  if($('input#user').val(id) != '' && $('input#password').val(pass) != ''){
    $('input.button').click();
  }else{
    console.log('somethink wrong...');
  }

  chrome.tabs.onUpdated.addListener(function(e,complete){
    chrome.tabs.remove(e);
  });
});

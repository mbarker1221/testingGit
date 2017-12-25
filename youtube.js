$(function(){
  
  $('form').submit(function(event){
  	event.preventDefault();
  	var search = $('#query').val();
  	getRequest(search);
  });
});

function getRequest(search) {
	var query = {
		key: 'AIzaSyDZgWbSmxsdkk7qk5vbcfEY9X-YBunoNDU',
		part: 'snippet',
    type: 'video',
    q: search
	};
	var url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, query, function(data){
  	showResults(data);
  });
};

function showResults(results) {
	var html = "";

  // console.log(results);

  $.each(results.items, function(index, value){
		html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="_blank">' + '<img src="' + value.snippet.thumbnails.high.url + '"/>' + '</a>'
    console.log(value.snippet.title);
  });

  $('#search-results').html(html);
};

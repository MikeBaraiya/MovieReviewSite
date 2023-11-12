function add_favorite(id){
	var data = {movieID: id};
	// Make AJAX call to server
	$.ajax({
		url: 'add-remove-favorite.php',
		type: 'POST',
		data: data,
		success: function(response) {
			location.reload();
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
}

function remove_favorite(id){
	var data = {removeID: id};
	// Make AJAX call to server
	$.ajax({
		url: 'add-remove-favorite.php',
		type: 'POST',
		data: data,
		success: function(response) {
			location.reload();
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
}
$(function() {
	$("#SendBtn").on('click', function(e) {
		$.ajax({
			url: 'http://localhost:3000/sendNotification',
			success: function() {
				alert('success')
			}
		});
	});
});
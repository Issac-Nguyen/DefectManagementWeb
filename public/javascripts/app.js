$(function() {
	$("#SendBtn").on('click', function(e) {
		$.ajax({
			url: '/sendNotification',
			success: function() {
				alert('success')
			}
		});
	});
});
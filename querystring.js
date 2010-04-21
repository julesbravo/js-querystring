String.prototype.querystring = function () {
	var qs_params = {}

	this.replace(
		new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		function($0, $1, $2, $3) { qs_params[$1] = $3; }
	);

	return qs_params;
};
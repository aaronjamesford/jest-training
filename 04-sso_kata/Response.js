var Response = function(text) {
	this.text = text;
}

Response.prototype.getText = function() {
	return this.text;
}

module.exports = Response;

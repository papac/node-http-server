/*
* Class route
*/
var Route = function(path, cb) {
	this.path = path.substring(1);
	this.cb = cb;
};
/*
* Fonction run, lanceur de callback.
*/
Route.prototype.run = function(request, response) {
	return this.cb(request, response);
};
/*
* Fonction math, Verification de pattern des routes.
*/
Route.prototype.match = function(pathname) {
	var path = this.path.replace(/:([\w_]+)/g, "([^/])");
	path = "^" + path + "$";
	/*
	* Regex de validation
	*/
	var regex = new RegExp(path);
	/*
	* Definition de la route /
	*/
	if (this.path == '') {
		this.path = "\/";
	}
	/*
	* Teste de validation du pathname
	* 
	* console.log("'" + this.path + "'", "=" ,pathname, "=>" ,regex.test(pathname));
	*/
	if (regex.test(pathname)) {
		return true;
	}
	return false;
};

module.exports = Route;
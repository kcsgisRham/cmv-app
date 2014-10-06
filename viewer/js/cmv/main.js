/*jshint unused:false */
// get the config file from the url if present
var file = 'config/viewer', s = window.location.search, q = s.match(/config=([^&]*)/i);
if (q && q.length > 0) {
    file = q[1];
    if(file.indexOf('/') < 0) {
        file = 'config/' + file;
    }
}

// load the controller
require(['cmv/viewer/Controller', file], function (Controller, config) {
    var controller = new Controller(config);
});
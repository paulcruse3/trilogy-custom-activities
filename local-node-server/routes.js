var user = require("./controllers/user");
var authorizer = require("./controllers/config/authorizer");

module.exports = function(app) {
    app.post("/api/user", function(request, respsonse) {
        user.create(request, respsonse);
    });
    app.post("/api/user/login", function(request, respsonse) {
        user.login(request, respsonse);
    });
    app.delete("/api/user/login", function(request, respsonse) {
        user.logout(request, respsonse);
    });
    app.get("/api/user", authorizer.authenticate, function(request, respsonse) {
        user.getMyself(request, respsonse);
    });
    app.get("/api/user/:id", authorizer.authenticate, function(request, respsonse) {
        user.getUserByID(request, respsonse);
    });
};

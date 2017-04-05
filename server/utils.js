// middleware for verifying authentication
exports.checkAuth = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    var err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  }
};

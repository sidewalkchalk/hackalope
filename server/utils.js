// middleware for verifying authentication
exports.checkAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  }
};

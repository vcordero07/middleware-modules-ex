const redirectsMap = {
  "/old-url-1": "/new-url-1",
  "/old-url-2": "/new-url-2",
  "/old-url-3": "/new-url-1",
  "/old-url-4": "/new-url-2"
};

function handleRedirects(req, res, next) {
  if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
    console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
    res.redirect(301, redirectsMap[req.path]);
  } else {
    next();
  }
}

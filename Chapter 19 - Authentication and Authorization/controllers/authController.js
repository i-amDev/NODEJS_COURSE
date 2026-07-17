exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Signup",
    currentPage: "signup",
    isLoggedIn: false
  });
};

exports.postSignup = (req, res, next) => {
    console.log(req.body);
    // res.cookie("isLoggedIn", true);
    // req.session.isLoggedIn = true;
    res.redirect("/login");
};

exports.postLogin = (req, res, next) => {
    console.log(req.body);
    // res.cookie("isLoggedIn", true);
    req.session.isLoggedIn = true;
    res.redirect("/");
};

exports.postLogout = (req, res, next) => {
    req.cookie.destroy(() => {
        res.redirect("/login");
    });
};
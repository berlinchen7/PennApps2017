/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.dash = (req, res) => {
  res.render('home', {
    title: 'Reload'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};



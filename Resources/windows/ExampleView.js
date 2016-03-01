var TextBlock = require('Windows.UI.Xaml.Controls.TextBlock');

exports.create = function(params) {
  params = params || {};

  var view = new TextBlock();

  if (params.text) {
    view.Text = params.text;
  }

  return view;
};

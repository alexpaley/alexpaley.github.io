var hasClassName = function(el, className) {
  return !!~(' ' + el.className + ' ').indexOf(' ' + className + ' ');
};

var toggleClassName = function(el, className) {

  (function toggleText(tagName, position, text) {
    var saved = "creations";

    if(!hasClassName(el, className)) {
      el.className += ' ' + className;
      document.getElementsByTagName(tagName, el)[position].innerHTML = text;
      return;
    }

    el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*'), ' ');
    document.getElementsByTagName(tagName, el)[position].innerHTML = saved;
  })('h3', 3, "projects");
};

document.getElementById('create').addEventListener('click', function (e) {
  e.preventDefault();
  toggleClassName(document.getElementsByTagName('body')[0], 'transition');
});

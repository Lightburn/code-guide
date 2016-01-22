/* Compiling a template */
var template = _.template($('#js-api-error-template').html());
/* Passing data to a template */
var html = template({ text: 'Error has happened. Oh no.'});


/* Underscore templating example */
function ErrorView(model) {

  this.$el = $('<div/>');

  this.render = function () {
    var self = this;

    this.$el.html(this.template(model));

    setTimeout(function () {
      self.$el.slideUp(function () {
        self.destroy();
      });
    }, 10000);

    return this;
  };

  this.destroy = function () {
    this.$el.remove();
  }

}

// compile the template only once
ErrorView.prototype.template = _.template($('#js-api-error-template').html());
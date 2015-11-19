'use strict';

var StudentsListView = Backbone.View.extend({

	tagName: 'table',

	className: 'students',

	template: _.template(templates.studentsList),

	initialize: function () {
		this.collection = new StudentsCollection();

		this.collection.fetch({
			success: function () {
				this.renderListItems();
			}.bind(this)
		});	
	},

	render: function () {
		this.$el.html(this.template());

		return this;
	},

	renderListItems: function () {
		_.each(this.collection.models, function(studentModel) {
			var studentListItemView = new StudentsListItemView({
				model: studentModel
			});

			this.$('tbody').append(studentListItemView.render().el);
		}, this);	
	}
});
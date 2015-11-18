'use strict';

var StudentsListItemView = Backbone.View.extend({
	tagName: 'tr',

	template: _.template(templates.studentsListItem),

	events: {
		'click .editBtn': 'startEditMode'
	},

	initialize: function () {
		mediator.subscribe('modelSaved', this.render, this);	
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this.$el;
	},

	startEditMode: function () {
		mediator.publish('changeMode', {model: this.model, mode: 'editMode'});
	}
});

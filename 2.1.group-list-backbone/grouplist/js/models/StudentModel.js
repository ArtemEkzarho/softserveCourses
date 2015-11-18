'use strict';

var StudentModel = Backbone.Model.extend({
	defaults: {
		name: '',
		surname: '',
		gender: '',
		age: 0,
		mail: '',
		skype: ''
	}
});
'use strict';

var StudentsCollection = Backbone.Collection.extend({
	model: StudentModel,

	url: '/students'
});
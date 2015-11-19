'use strict';

var MainView = Backbone.View.extend({

    template: _.template(templates.main),

    initialize: function () {
        this.studentsListView = new StudentsListView();

        mediator.subscribe('changeMode', this.startModeView, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template());

        this.$('.studentsList').html(this.studentsListView.render().el);
    },

    startModeView: function (options) {
        var Mode = {
            previewMode: PreviewView,
            editMode: EditView
        };

        this.modeView = new Mode[options.mode]({
            model: options.model
        });

        this.$('.editContainer').html(this.modeView.render().el);
    }
});
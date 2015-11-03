'use strict';

function TableController (group) {
    var tableWrap = helpers.getEl('#students tbody'),
        tableView = new TableView(tableWrap, group.toArray());

    return this;
};
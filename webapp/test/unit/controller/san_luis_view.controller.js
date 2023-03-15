/*global QUnit*/

sap.ui.define([
	"san_luis_nsp/san_luis_project/controller/san_luis_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("san_luis_view Controller");

	QUnit.test("I should test the san_luis_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

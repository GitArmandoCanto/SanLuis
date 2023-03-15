/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"san_luis_nsp/san_luis_project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

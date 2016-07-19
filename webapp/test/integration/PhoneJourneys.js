jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"nasa/test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"nasa/test/test/integration/pages/App",
	"nasa/test/test/integration/pages/Browser",
	"nasa/test/test/integration/pages/Master",
	"nasa/test/test/integration/pages/Detail",
	"nasa/test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nasa.test.view."
	});

	sap.ui.require([
		"nasa/test/test/integration/NavigationJourneyPhone",
		"nasa/test/test/integration/NotFoundJourneyPhone",
		"nasa/test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});


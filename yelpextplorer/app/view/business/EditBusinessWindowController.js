Ext.define('YelpExtplorer.view.business.EditBusinessWindowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.business-editbusinesswindow',

	onWindowShow: function(win) {
		var business = this.getViewModel().get('editBusiness');
		this.lookupReference('form').loadRecord(business);
	},
	onSave: function(button) {
		this.lookupReference('form').updateRecord();
		this.getView().close();

	},
	onCancel: function(button) {
		this.getView().close();
	},
	onStarSliderChange: function(slider, stars) {
		this.lookupReference('starsImage').setSrc('resources/images/stars_' + stars + '.png');
	}


});
Ext.define('YelpExtplorer.view.business.BusinessDetailController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.business-businessdetail',
	requires: ['YelpExtplorer.view.business.EditBusinessWindow'],

	onEditClick: function(button) {
		var business = this.getViewModel().get('business');
		Ext.create({
			xtype: 'editbusinesswindow',
			title: 'Business',
			autoShow: true,

			viewModel: {
				data: {
					editBusiness: business
				}
			}

		});
	}



});
Ext.define("YelpExtplorer.view.business.EditBusinessWindow", {
	extend: 'Ext.window.Window',
	xtype: 'editbusinesswindow',
	requires: [
		'Ext.form.Panel',
		'YelpExtplorer.view.business.EditBusinessWindowController'
	],
	controller: 'business-editbusinesswindow',
	resizeable: false,
	bodyPadding: 8,
	modal: true,
	stateful:true,
	stateId:'editBusinessWindow',
	listeners: {
		show: {
			scope: 'controller',
			fn: 'onWindowShow'
		}
	},
	layout: 'fit',
	items: [{
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: 'Name'
		}, {
			xtype: 'container',
			layout: 'hbox',
			items: [{
				xtype: 'image',
				width: 84,
				height: 17,
				reference: 'starsImage',
				style: {
					'margin-right': '16px'
				}
			}, {
				xtype: 'slider',
				increment: 0.5,
				decimalPrecision: 1,
				minValue: 1,
				maxValue: 5,
				width: 160,
				name: 'stars',
				listeners: {
					change: 'onStarSliderChange'
				}
			}]
		}]
	}],
	buttons: [{
		text: 'Save',
		handler: 'onSave'
	}, {
		text: 'Cancel',
		handler: 'onCancel'
	}]
});
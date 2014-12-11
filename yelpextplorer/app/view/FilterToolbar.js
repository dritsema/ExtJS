Ext.define('YelpExtplorer.view.FilterToolbar', {
	extend: 'Ext.Container',
	requires: [
		'Ext.form.field.ComboBox',
		'Ext.toolbar.Breadcrumb'
	],
	xtype: 'filtertoolbar',
	layout: 'hbox',
	padding: 8,
	items: [{
		xtype: 'combobox',
		width: 150,
		forceSelection: true,
		emptyText: 'Select a university',

		bind: {
			selection: '{school}',
			store: '{schools}'
		},

		queryMode: 'local',
		displayField: 'name',
		valueField: 'id'
	}, {
		xtype: 'breadcrumb',
		reference: 'breadcrumb',
		minWidth: 50,
		bind: {
			selection: '{category}',
			store: '{categories}'
		}
	}]
});
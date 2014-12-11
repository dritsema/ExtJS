Ext.define('YelpExtplorer.model.Business', {
	extend: 'Ext.data.Model',

	proxy: {
		url: '//traininglabs.sencha.com/go?fn=schoolbiz',
		reader: {
			rootProperty: 'data'
		}
	},
	fields: ['name', 'stars']

});
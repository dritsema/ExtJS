Ext.define('YelpExtplorer.model.School', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'ajax',
		url: '//traininglabs.sencha.com/go?fn=schoollist',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});
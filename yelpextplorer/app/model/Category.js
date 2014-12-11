Ext.define('YelpExtplorer.model.Category', {
	extend: 'Ext.data.TreeModel',

	proxy: {
		type: 'ajax',
		url: '//traininglabs.sencha.com/go?fn=categories'
	}

});
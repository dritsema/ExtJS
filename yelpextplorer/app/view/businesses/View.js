Ext.define('YelpExtplorer.view.businesses.View', {
	extend: 'Ext.view.View',
	xtype: 'businessesview',
	autoScroll: true,
	itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
	itemCls: 'businessesview',
	overItemCls: 'over',
	selectedItemCls: 'selected'
});
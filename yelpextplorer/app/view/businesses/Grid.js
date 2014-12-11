Ext.define('YelpExtplorer.view.businesses.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'businessesgrid',

	columns: [{
		text: 'Name',
		dataIndex: 'name',
		width: 120
	}, {
		xtype: 'templatecolumn',
		text: 'Rating',
		dataIndex: 'stars',
		tpl: '<img src="resources/images/stars_{stars}.png"/>'
	}, {
		text: 'Reviews',
		dataIndex: 'review_count',
		width: 60,
		align: 'right'
	}, {
		text: 'Address',
		dataIndex: 'full_address',
		flex: 1
	}, {
		xtype: 'widgetcolumn',
		widget: {
			xtype: 'sliderwidget',
			minValue: 0,
			maxValue: 5,
			value: '{stars}'
		}
	}]
});
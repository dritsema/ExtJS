Ext.define('YelpExtplorer.view.businesses.StarCounts', {
	extend: 'Ext.chart.PolarChart',
	xtype: 'businessesstarcounts',

	requires: [
		'Ext.draw.Color', // This won't be necessary in the next release of 5.0.x
		'Ext.chart.interactions.Rotate',
		'Ext.chart.series.Pie',
		'Ext.chart.interactions.ItemHighlight'
	],

	interactions: 'rotate',

	series: [{
		type: 'pie',
		label: {
			field: 'stars',
			display: 'rotate'
		},
		xField: 'count',
		tooltip: {
			trackMouse: true,
			renderer: function(record, item) {
				var d = record.data;
				this.setHtml('There ' + ((d.count == 1) ? 'is ' : 'are ') + Ext.util.Format.plural(d.count, 'business', 'businesses') + ' with a ' + d.stars + ' star rating.');
			}
		}
	}]
});
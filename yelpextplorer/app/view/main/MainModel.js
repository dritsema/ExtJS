Ext.define('YelpExtplorer.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	requires: [
		'YelpExtplorer.model.School',
		'YelpExtplorer.model.Business',
		'YelpExtplorer.model.Category'
	],

	data: {
		school: null,
		business: null,
		category: null
	},
	formulas: {
		location: {
			bind: '{school}',
			get: function(school) {
				if (school) {
					return {
						latitude: school.data.latitude,
						longitude: school.data.longitude
					};
				}
			}
		}
	},
	stores: {
		schools: {
			model: 'YelpExtplorer.model.School',
			autoLoad: true,
			listeners: {
				load: {
					fn: 'onSchoolsLoadFirstTime',
					single: true
				}
			}
		},
		businesses: {
			model: 'YelpExtplorer.model.Business',
			autoLoad: true,
			pageSize: 200,
			remoteFilter: true,
			filters: [{
				property: 'schoolid',
				value: '{school.id}'
			}],
			sorters: ['name']
		},
		sortableBusinesses: {
			source: '{businessesForCategory}'
		},
		businessesForCategory: {
			source: '{businesses}',
			filters: [{
				category: '{category}',
				id: 'cat',
				filterFn: function(business) {
					if (!this.category) {
						return true; // Treat no selection as "All"
					}
					var c = this.category.data.text;
					return (c === 'All') || Ext.Array.contains(business.data.categories, c);
				}
			}],
			listeners: {
				refresh: 'onBusinessesRefresh',
				filterchange: 'clearHeatMap',
				datachanged: 'clearHeatMap'
			}
		},
		categories: {
			type: 'tree',
			model: 'YelpExtplorer.model.Category',
			autoLoad: true,
			rootVisible: true,
			root: {
				text: 'All',
				expanded: true
			}
		},
		starCounts: {
			type: 'array',
			fields: ['stars', 'count']
		}


	}
});
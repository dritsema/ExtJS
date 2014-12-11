Ext.define('YelpExtplorer.view.main.Routes', {
	extend: 'Ext.Mixin',
	processRoute: function(tab, schoolId) {
		tab = tab || 'map';
		schoolId = schoolId || 20;

		this.lookupReference('businessesTabPanel').setActiveItem(tab);

		if (schoolId) {
			var vm = this.getViewModel();
			var store = vm.getStore('schools');
			if (store && (store.loadCount > 0)) {
				var school = store.getById(schoolId);
				if (school) {
					vm.set('school', school);
				}
			}
		}

	},
	onSchoolIdChange: function(schoolId) {
		this.schoolId = schoolId;
		this.updateHash();
	},
	onBusinessesTabChange: function(tabpanel, card) {
		this.cardItemId = card.getItemId();
		this.updateHash();
	},
	updateHash: function() {
		var hash = '!' + (this.cardItemId || 'map');
		hash += '/' + (this.schoolId || 20);
		this.redirectTo(hash);
	}
});


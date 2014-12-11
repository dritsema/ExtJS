Ext.define('YelpExtplorer.view.BusinessesFilter', {
	extend: 'Ext.tree.Panel',
	xtype: 'businessesfilter',

	requires: ['Ext.form.field.ComboBox'],

	rootVisible: true,
	useArrows: true,
	lines: false,
	root: {
		text: 'All'
	},
	
	tbar: [{
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
	}],
	renderConfig: {
		pinned: true
	},
	updatePinned: function(pinned) {
		this.down('#pin').setType(pinned ? 'pin' : 'unpin');
	},
	toggle: function() {
		this.setPinned(!this.getPinned());
	},
	tools: [{
		type: 'pin',
		itemId: 'pin',
		callback: function(panel, tool) {
			panel.toggle();
		}
	}],
	maybeExpand: function() {
		if (!this.getPinned()) {
			this.expand();
		}
	},
	maybeCollapse: function() {
		if (!this.getPinned()) {
			this.collapse();
		}
	},
	afterRender: function() {
		this.callParent(arguments);
		var me = this;
		me.getEl().on('mouseleave', me.maybeCollapse, me);
		me.splitter.on('render', function(splitter) {
			splitter.getEl().on('mouseover', me.maybeExpand, me);
		});
	}



});
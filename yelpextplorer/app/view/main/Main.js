Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.FilterToolbar',
        'YelpExtplorer.view.business.BusinessDetail',
        'YelpExtplorer.view.businesses.TabPanel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    dockedItems: [{
        dock: 'top',
        xtype: "banner"
    }, {
        dock: 'top',
        xtype: 'filtertoolbar'
    }],
    items: [{
        region: 'center',
        xtype: 'businessestabpanel',
        listeners: {
            tabchange: 'onBusinessesTabChange',
            whatshot: 'onWhatsHot'
        }
    }, {
        region: 'east',
        xtype: 'businessdetail',
        width: 130,
        title: 'Detail',
        collapsible: true,
        titleCollapse: true,
        collapseMode: 'mini',
        border: true,
        bind: {
            // data: '{business}'
            data: {
                bindTo: '{business}',
                deep: true
            }
        },

    }]
});
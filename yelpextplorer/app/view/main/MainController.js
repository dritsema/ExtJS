Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',


    routes: {
        '!:tab': 'processRoute',
        '!:tab/:schoolId': 'processRoute'
    },

    mixins: ['YelpExtplorer.view.main.Routes'],

    onSchoolsLoadFirstTime: function(store) {
        var token = Ext.util.History.getToken().substr(1); // Skip the !
        var index = token.indexOf('/');
        var tab = token.substr(0, index);
        var schoolId = token.substr(index + 1);
        this.processRoute(tab, schoolId);
    },

    onBusinessesRefresh: function(store) {
        var rawData = {
            "0": 0,
            "1": 0,
            "1.5": 0,
            "2": 0,
            "2.5": 0,
            "3": 0,
            "3.5": 0,
            "4": 0,
            "4.5": 0,
            "5": 0
        };
        store.each(function(school) {
            var stars = school.data.stars.toString();
            rawData[stars]++;
        });
        var data = [];
        Ext.Array.forEach(["0", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], function(item) {
            data.push([item, rawData[item]]);
        });
        this.getStore('starCounts').setData(data);
    },

    initViewModel: function(vm) {
        var me = this;
        vm.bind('{school}', this.clearBusiness, this);
        vm.bind('{school.id}', this.onSchoolIdChange, this);
    },

    clearBusiness: function() {
        this.getViewModel().set('business', null);
    },

    onWhatsHot: function(button) {
        // There's nothing to do if we're already showing the heat map
        if (this.heatMapLayer) {
            return;
        }

        var businesses = this.getViewModel().getStore('businessesForCategory');

        var heatmapData = [];
        businesses.each(function(business) {
            var d = business.data;
            var latLng = new google.maps.LatLng(d.latitude, d.longitude);
            heatmapData.push({
                location: latLng,
                weight: business.review_count
            });
        });

        var map = this.lookupReference('businessesmap').map;

        this.heatMapLayer = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius: 40,
            map: map
        });

    },

    clearHeatMap: function() {
        if (this.heatMapLayer) {
            this.heatMapLayer.setMap(null);
            this.heatMapLayer = null;
        }
    }

});
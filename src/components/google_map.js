import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        var platform = new H.service.Platform({
            'app_id': 'McGui3BwLIa32HomVain',
            'app_code': '2qmG0weRSinaAU5BJuZCSA'
        });

        // Obtain the default map types from the platform object
        var maptypes = platform.createDefaultLayers();


        new H.Map(this.refs.map, maptypes.normal.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }


    render() {
        return (
            <div ref="map"/>
        );
    }
}

export default GoogleMap;
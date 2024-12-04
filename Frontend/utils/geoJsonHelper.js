import * as turf from '@turf/turf';

const stateGeoJson = require('../assets/states.geojson');


export const getStateByCoordinates = (lat, lng) => {
    const point = turf.point([lat, lng]);
    for(const feature of stateGeoJson.features) {
        const polygon = turf.polygon(feature.geometry.coordinates);
        if (turf.booleanPointInPolygon(point, polygon)) {
            return feature.properties.name;
        }
    } 
    return null
}
import * as turf from '@turf/turf';
import stateGeoJson from '../assets/states.geojson';

console.log(`state geojson file: ${stateGeoJson}`);

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
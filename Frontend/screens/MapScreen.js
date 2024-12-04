import * as Location from 'expo-location';
import { getStateByCoordinates } from "../utils/geoJsonHelper";
import { requestLocationPermission } from '../utils/locationPermission';


export default function MapWithOutBreak() {
    const [location, setLocation] = useState(null);
    const [outbreakStates, setOutbreakStates] = useState([]);
  
    // Function to check if the user reports an outbreak (for demonstration, assume this returns a boolean)
    const userReportsOutbreak = (stateName) => {
      // Logic to determine if the user reports an outbreak in the state
      // For example, it could be based on a user input or form submission
      return true; // Assume the user reports an outbreak in this case
    };
  
    // Function to report the outbreak to the state array
    const reportOutbreak = (stateName) => {
      if (userReportsOutbreak(stateName)) { // process user data
        if (!outbreakStates.includes(stateName)) {
          setOutbreakStates((prevOutbreakStates) => [...prevOutbreakStates, stateName]);
        }
      }
    };
    const getLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (hasPermission) {
          const { coords } = await Location.getCurrentPositionAsync();
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
    
          // Get the state name based on coordinates
          const stateName = getStateByCoordinates(location.latitude, location.longitude);
    
          // Check if an outbreak was reported in the state
          if (stateName) {
            reportOutbreak(stateName);
          }


        } else {
          console.error("Location permission denied");
        }
      };
    
      useEffect(() => {
        getLocation();
      }, []);
  
  
    const isOutbreakInState = (state) => outbreakStates.includes(state);
  
    return (
        <View>
            // Logic goes here
        </View>
    );
  };
  
  
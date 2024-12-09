import Svg, { Path } from 'react-native-svg';
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { getStateByCoordinates } from "../utils/geoJsonHelper";
import { requestLocationPermission } from '../utils/locationPermission';


export default function MapWithOutBreak() {
    // const [location, setLocation] = useState(null);
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
          console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
          // setLocation({ latitude, longitude });
    
          // Get the state name based on coordinates
          const stateName = getStateByCoordinates(latitude, longitude);
          console.log(`State name is ${stateName}`);
    
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
      <View style={styles.container}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1008 651">
      <Path id="AE" title="United Arab Emirates"
        d="M619.874,393.722L620.373,393.573L620.477,394.411L622.671,393.93L624.99,394.009L626.684,394.1L628.604,392.028L630.695,390.054L632.467,388.146L633.001,389.202L633.382,391.639L631.949,391.651L631.72,393.648L632.216,394.073L630.947,394.674L630.939,395.919L630.122,397.175L630.049,398.394L629.484,399.032L621.056,397.508L619.981,394.428z" />

      <Path id="AF" title="Afghanistan"
        d="M646.879,356.901L649.738,358.201L651.853,357.745L652.438,356.188L654.651,355.669L656.231,354.617L656.791,351.832L659.154,351.154L659.594,349.902L660.917,350.843L661.762,350.952L663.323,350.975L665.438,351.716L666.295,352.143L668.324,351.017L669.27,351.694L670.174,350.085L671.85,350.159L672.281,349.641L672.578,348.213L673.785,346.975L675.303,347.785L674.998,348.869L675.846,349.038L675.585,351.994L676.694,353.137L677.672,352.404L678.916,352.057L680.663,350.486L682.594,350.745L685.486,350.751L685.985,351.758L684.353,352.15L682.928,352.795L679.71,353.2L676.699,353.931L675.063,355.439L675.725,356.899L676.046,358.603L674.649,360.033L674.766,361.335L673.995,362.549L671.328,362.444L672.43,364.663L670.646,365.507L669.455,367.511L669.609,369.491L668.514,370.415L667.477,370.109L665.334,370.537L665.027,371.451L662.939,371.446L661.377,373.289L661.278,376.039L657.635,377.374L655.682,377.092L655.114,377.794L653.438,377.386L650.634,377.865L645.936,376.228L648.479,373.298L648.249,371.202L646.125,370.65L645.905,368.565L644.987,365.921L646.187,364.094L644.966,363.599L645.736,361.148z" />
      <Path id="AM" title="Armenia"
        d="M597.453,337.502L601.349,336.923L601.93,337.897L602.998,338.537L602.434,339.461L603.927,340.719L603.137,341.881L604.327,342.869L605.586,343.462L605.648,345.958L604.633,346.064L603.488,343.984L603.501,343.427L602.262,343.435L601.432,342.462L600.849,342.561L599.744,341.498L597.659,340.59L597.929,338.803z" />
      <Path id="AO" title="Angola"
        d="M521.03,479.784l0.691,2.088l0.805,1.683l0.645,0.908l1.074,1.47l1.854,-0.228l0.925,-0.396l1.549,0.397l0.42,-0.703l0.704,-1.637l1.739,-0.109l0.151,-0.486l1.431,-0.011l-0.244,1.011l3.402,-0.024l0.051,1.768l0.568,1.086l-0.413,1.698l0.206,1.735l0.935,1.049l-0.15,3.371l0.694,-0.26l1.219,0.07l1.737,-0.425l1.277,0.167l0.296,0.881l-0.319,1.379l0.493,1.335l-0.418,1.068l0.239,0.986l-5.838,-0.036l-0.129,9.158l1.892,2.377l1.83,1.823l-5.153,1.192l-6.788,-0.414l-1.943,-1.4l-11.366,0.126l-0.424,0.205L513,511.367l-1.818,-0.087l-1.678,0.497l-1.35,0.555l-0.264,-1.833l0.388,-2.552l0.967,-2.645l0.146,-1.236l0.91,-2.588l0.668,-1.173l1.611,-1.87l0.899,-1.269l0.294,-2.107l-0.147,-1.609l-0.838,-1.013l-0.747,-1.716l-0.689,-1.694l0.15,-0.586l0.862,-1.117l-0.851,-2.718l-0.574,-1.88l-1.405,-1.774l0.267,-0.544l1.157,-0.376l0.813,0.052l0.983,-0.336L521.03,479.784zM510.124,479.243l-0.713,0.296l-0.75,-2.104l1.132,-1.207l0.847,-0.47l1.051,0.959l-1.021,0.587l-0.458,0.719L510.124,479.243z" />
      <Path id="AR" title="Argentina"
        d="M291.601,648.907l-2.664,0.245l-1.43,-1.726l-1.689,-0.13l-3.002,-0.003l-0.002,-10.568l1.077,2.148l1.402,3.525l3.645,2.865l3.925,1.207L291.601,648.907zM293.101,526.469l1.648,2.178l1.094,-2.426l3.197,0.125l0.453,0.644l5.155,4.945l2.292,0.464l3.426,2.262l2.888,1.202l0.402,1.362l-2.76,4.731l2.827,0.854l3.149,0.479l2.217,-0.505l2.543,-2.398l0.458,-2.743l1.389,-0.593l1.407,1.789l-0.057,2.489l-2.361,1.729l-1.883,1.282l-3.165,3.078l-3.741,4.372l-0.701,2.594l-0.75,3.365l0.028,3.297l-0.608,0.742l-0.217,2.165l-0.192,1.761l3.56,2.914l-0.383,2.368l1.752,1.507l-0.143,1.7l-2.694,4.516l-4.157,1.913l-5.624,0.746l-3.08,-0.361l0.589,2.147l-0.574,2.721l0.518,1.851l-1.682,1.299l-2.874,0.512l-2.696,-1.347l-1.083,0.967l0.391,3.71l1.893,1.135l1.535,-1.189l0.835,1.962l-2.582,1.18l-2.251,2.383l-0.412,3.907l-0.663,2.107l-2.648,0.011l-2.198,2.035l-0.804,3.013l2.757,2.982l2.681,0.831l-0.964,3.726l-3.312,2.375l-1.822,5.025l-2.559,1.719l-1.149,2.059l0.905,4.641l1.866,2.633l-1.182,-0.231l-2.599,-0.715l-6.775,-0.608l-1.162,-2.632l0.054,-3.332l-1.867,0.284l-0.988,-1.596l-0.245,-4.599l2.151,-1.878l0.889,-2.68l-0.326,-2.112l1.486,-3.52l1.024,-5.35l-0.301,-2.331l1.224,-0.748l-0.3,-1.478l-1.301,-0.782l0.924,-1.63l-1.266,-1.462l-0.655,-4.395l1.127,-0.767l-0.474,-4.543l0.659,-3.751l0.75,-3.223l1.679,-1.3l-0.853,-3.462l-0.009,-3.217l2.123,-2.263l-0.065,-2.868l1.6,-3.313l0.007,-3.086l-0.728,-0.609l-1.292,-5.694l1.728,-3.343l-0.265,-3.115l1.002,-2.896l1.836,-2.963l1.979,-1.95l-0.839,-1.225l0.585,-1.001l-0.089,-5.143l3.054,-1.509l0.962,-3.159l-0.34,-0.758l2.336,-2.722L293.101,526.469z" />
      </Svg>
    </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  // const styles = StyleSheet.create({
  //   Container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   TextContainer: { 
  //     fontSize: 32, 
  //     fontWeight: 'bold'
  //   }
  // })
  
  
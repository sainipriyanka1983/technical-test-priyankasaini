import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = "pk.eyJ1Ijoic2Fpbmlwcml5YW5rYTE5ODMiLCJhIjoiY2xseW8xOXQ2MGt3cTNlcDM2Z2M0N2J4eiJ9.btKcqMrDA-KR4o3z6RXZTA"

export const Map = (props) => {
  const mapContainer = useRef()

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only created once
  useEffect(() => {
    console.log(props.lat);
    console.log(props.long);
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: 'map',
      zoom: 14,
      center: [props.lat, props.long],
      pitch: 80,
      bearing: 41,
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/satellite-streets-v12'
      });
       
      map.on('style.load', () => {
      map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      });
  }, [])

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
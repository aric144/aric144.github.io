/* global L jQuery */
var map3 = L.map('map3').setView([37.09, -95.71], 4)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map3)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = function (feature) {
    var stateAverageHouseholdSize = feature.properties.AVE_HH_SZ // get the current state's Average Household Size attribute
    var initialStateColor = 'purple' // let the initial color be purple
    if (stateAverageHouseholdSize === 2.58) { initialStateColor = 'gold' } // if the state's Average Household Size is less than the average, color it green
    if (stateAverageHouseholdSize > 2.58) { initialStateColor = 'green' }
    if (stateAverageHouseholdSize < 2.58) { initialStateColor = 'purple' }
    return {
      color: initialStateColor, // use the color variable above for the value
      weight: 2,
      fillOpacity: 0.5,
      dashArray: 3
    }
  }
  var stateColor = {
    style: stateStyle,
    onEachFeature: statePopUp
  }
  L.geoJSON(data, stateColor).addTo(map3)
})
var statePopUp = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var size = feature.properties.AVE_HH_SZ
  layer.bindPopup('Average household size of ' + name + ': ' + size + '<br>National average: 2.58')
}

/* global L */
var map1 = L.map('map1').setView([43.87, 12.57], 6)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map1)
var romeMarker = L.marker([41.88, 12.46]).addTo(map1)
var triangle = L.polygon([
  [45.44, 12.31],
  [43.77, 11.25],
  [45.46, 9.19]
]).addTo(map1)
triangle.bindPopup('Triangulation of popular cities in Italy')
romeMarker.bindPopup('Ciao Italia!')
var pointA = new L.LatLng(45.44, 10.31)
var pointB = new L.LatLng(47.29, 12.83)
var pointList = [pointA, pointB]
var firstpolyline = new L.Polyline(pointList, {
  color: 'violet',
  weight: 3,
  opacity: 1,
  smoothFactor: 1
})
firstpolyline.addTo(map1)

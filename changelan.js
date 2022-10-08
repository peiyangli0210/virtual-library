var tour_xml = "lanch.xml";
embedpano({
  id: "pano1",
  swf: "tour.swf",
  xml: tour_xml,
  target: "pano",
  html5: "auto",
  mobilescale: 1.0,
  passQueryParameters: true,
});
function changeLink() {
  if (
    document.getElementById("connectSocket").value ==
    "                                                                                                                                                                                                  Switch to English                                                                                                                                                                                                   "
  ) {
    document.getElementById("connectSocket").value =
      "                                                                                                                                                                                                       切换到中文                                                                                                                                                                                                         ";
    removepano("pano1");
    tour_xml = "lanen.xml";
    embedpano({
      id: "pano1",
      swf: "tour.swf",
      xml: tour_xml,
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
    });
  } else {
    document.getElementById("connectSocket").value =
      "                                                                                                                                                                                                  Switch to English                                                                                                                                                                                                   ";
    removepano("pano1");
    tour_xml = "lanch.xml";
    embedpano({
      id: "pano1",
      swf: "tour.swf",
      xml: tour_xml,
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
    });
  }
}

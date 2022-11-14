import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var seasonsAverageElm = document.getElementById("seasons-average");
var seriesInfoDiv = document.getElementById('series-info');
renderSeriesInTable(dataSeries);
seasonsAverageElm.innerHTML = "Seasons average: ".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (indSeries) {
        var i = 1;
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td id=\"TextoNegrilla\">".concat(indSeries.position, "</td>\n                           <td id=\"TextoAzul\">").concat(indSeries.name, "</td>\n                           <td>").concat(indSeries.channel, "</td>\n                           <td>").concat(indSeries.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return renderSeriesInfo(indSeries); });
        i++;
    });
}
function getSeasonsAverage(series) {
    var totalSeries = 0;
    var totalSeasons = 0;
    series.forEach(function (indSeries) { return totalSeasons = totalSeasons + indSeries.seasons; });
    totalSeries = series.length;
    return Math.round(totalSeasons / totalSeries);
}
function renderSeriesInfo(indSeries) {
    clearSeriesInfo();
    var trElement = document.createElement("div");
    trElement.classList.add('card');
    trElement.style.setProperty('width', '18rem');
    trElement.innerHTML = " <img src=\"".concat(indSeries.image, "\" class=\"card-img-top\" alt=\"...\"> \n                          <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(indSeries.name, "</h5>\n                            <p class=\"card-text\">").concat(indSeries.description, "</p>\n                            <a href=\"").concat(indSeries.hyperlink, "\" class=\"btn btn-primary\">").concat(indSeries.hyperlink, "</a>\n                          </div>");
    seriesInfoDiv.appendChild(trElement);
}
function showSeriesInfo(name, series) {
    if (series === void 0) { series = dataSeries; }
    series.forEach(function (indSeries) { return indSeries.name == name ? renderSeriesInfo(indSeries) : 1 + 1; });
}
function clearSeriesInfo() {
    while (seriesInfoDiv.hasChildNodes()) {
        if (seriesInfoDiv.firstChild != null) {
            seriesInfoDiv.removeChild(seriesInfoDiv.firstChild);
        }
    }
}

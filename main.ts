

import { Series } from './series.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAverageElm: HTMLElement = document.getElementById("seasons-average")!;
let seriesInfoDiv: HTMLElement = document.getElementById('series-info')!;

renderSeriesInTable(dataSeries);

seasonsAverageElm.innerHTML = `Seasons average: ${getSeasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((indSeries) => {
    let i = 1;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td id="TextoNegrilla">${indSeries.position}</td>
                           <td id="TextoAzul">${indSeries.name}</td>
                           <td>${indSeries.channel}</td>
                           <td>${indSeries.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    trElement.addEventListener("click", function () { return renderSeriesInfo(indSeries); });
    i++;
  });
}

function getSeasonsAverage(series: Series[]): number {
  let totalSeries: number = 0;
  let totalSeasons: number = 0;
  series.forEach((indSeries) => totalSeasons = totalSeasons + indSeries.seasons);
  totalSeries = series.length;
  return Math.round(totalSeasons/totalSeries);
}

function renderSeriesInfo(indSeries: Series): void{
  clearSeriesInfo();
  let trElement = document.createElement("div");
  trElement.classList.add('card');
  trElement.style.setProperty('width','18rem');
  trElement.innerHTML = ` <img src="${indSeries.image}" class="card-img-top" alt="..."> 
                          <div class="card-body">
                            <h5 class="card-title">${indSeries.name}</h5>
                            <p class="card-text">${indSeries.description}</p>
                            <a href="${indSeries.hyperlink}" class="btn btn-primary">${indSeries.hyperlink}</a>
                          </div>`;
  seriesInfoDiv.appendChild(trElement);
}

function showSeriesInfo(name: string, series: Series[] = dataSeries): void {
  series.forEach((indSeries)=>indSeries.name==name?renderSeriesInfo(indSeries):1+1);
}

function clearSeriesInfo() {
  while (seriesInfoDiv.hasChildNodes()) {
    if (seriesInfoDiv.firstChild != null) {
      seriesInfoDiv.removeChild(seriesInfoDiv.firstChild);
     
    }
  }
}
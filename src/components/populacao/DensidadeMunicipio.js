import * as Plot from "npm:@observablehq/plot";
import {format} from "https://cdn.skypack.dev/d3-format@3";
import {timeFormat, utcFormat} from "https://cdn.skypack.dev/d3-time-format@4";

const formatYear = utcFormat("%Y");

export function DensidadeMunicipio(data, estado, {width, height} = {}) {
  return Plot.plot({
    // title: "Taboão da Serra, SP, é o município brasileiro de maior densidade demográfica, com 14 mil habitantes por km²",
    // subtitle: "Barcelos, AM, o de menor: 0.15 habitantes por km²",
    subtitle: "Santa Fé de Minas é o município mineiro de menor densidade demográfica, com pouco mais de 1 habitante por km²",
    style: { fontSize: 15 },
    width,
    height:650,
    marginBottom:50,
    marginLeft: 50,
    marginRight: 40,
    marginTop:30,



    y: {
        type: 'log',
    //   axis:'right',
      tickFormat: format(",.1s"), 
      domain: [1, 1*1e4], 
    // domain: [1*1e-1, 1.5*1e4], 
    //   type: "linear", 
      grid:true,
      label:'Número de habitantes por km²',
    //   labelOffset:50,
      ticks: 5, 
    //   line: true, 
    //   nice: true
    }, 
    x : {
        type: 'log',
      label:'População do município',
      labelAnchor: 'right',
      ticks:5,
      domain: [8*1e2, 10*1e6], 
      tickFormat: format(",.1s"), 
    //   tickRotate: -90,
    //   nice:true,
      grid:true,
    },
    // fx: {padding: 0, label: null, tickRotate: 90, tickSize: 6},
    color: {
    //   legend: true,
    //   domain: [2*1e-2, 1.5*1e4], 
    //   scheme: "Observable10",
    // scheme: 'plasma',
      // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
      range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
      domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
    },
    r: {
        legend: true,
        label: 'Área km²',
        // tickFormat: format(",.1r"), 
    },
    marks: [
        Plot.dot(
            data.filter((d) => d.estado === 'Minas Gerais'), 
            // data, 
            {
            x: "populacao",
            y: "densidade",
            r: 5,
            // stroke: 'regiao',
            fill: 'Região',
            opacity: 0.7,
            channels: {
                Município: 'municipio',
                População: 'populacao',
                Região: 'regiao',
                Estado: 'estado',
            },
            tip: {
                format: {
                    fill: true,
                    Estado: true,
                    Município: true,
                    stroke:false,
                    População: true,
                    x:false,
                }
            }
        }),
        Plot.dot(
            data.filter((d) => d.estado === 'Minas Gerais'), 
            // data, 
            {
            x: "populacao",
            y: "densidade",
            r:4,
            // stroke: 'regiao',
            opacity: 0.3,
        })
    ]
  });
}




// export function DensidadeMunicipio(data, {width, height} = {}) {
//     return Plot.plot({
//       // title: "212.6 milhões foi a população estimada em 2024",
//       // subtitle: "42% estão no Sudeste",
//       style: { fontSize: 15 },
//       width,
//       height,
//       // marginLeft: 0,
//       // marginRight: 45,
//       // marginTop:36,
//       y: {
//           type: 'log',
//       //   axis:'right',
//       //   tickFormat: format(".3s"), 
//       //   domain: [170*1e6, 215*1e6], 
//       //   type: "linear", 
//       //   grid:true,
//       //   label:'População',
//       //   labelOffset:50,
//         // ticks: 5, 
//         // line: true, 
//       //   nice: true
//       }, 
//       x : {
//           type: 'log',
//       //   label:null,
//       //   ticks:10,
//       //   nice:true,
//       },
//       color: {
//         legend: true,
//       //   scheme: "Observable10",
//         // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
//         range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
//       //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
//       //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
//         domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
//       },
//       marks: [
//           Plot.dot(data, {
//               x: "area",
//               y: "populacao",
//               stroke: 'regiao',
//           })
//       ]
//     });
//   }

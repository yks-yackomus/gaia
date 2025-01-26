import * as Plot from "npm:@observablehq/plot";
import {format} from "https://cdn.skypack.dev/d3-format@3";
import {timeFormat, utcFormat} from "https://cdn.skypack.dev/d3-time-format@4";

const formatYear = utcFormat("%Y");

export function DensidadeMunicipio(data, estado, {width, height} = {}) {
  return Plot.plot({
    title: "Taboão da Serra, SP, é o município de maior densidade populacional com 14 mil habitantes por km²",
    subtitle: "Barcelos, AM, o de menor: 0.15 habitantes por km²",
    style: { fontSize: 15 },
    width,
    height:650,
    marginBottom:50,
    marginLeft: 50,
    marginRight: 30,
    marginTop:30,



    y: {
        type: 'log',
    //   axis:'right',
      tickFormat: format(",.1r"), 
      domain: [2*1e-2, 1.5*1e4], 
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
        // type: 'log',
      label:null,
      ticks:10,
      tickRotate: -90,
      nice:true,
    //   grid:true,
    },
    // fx: {padding: 0, label: null, tickRotate: 90, tickSize: 6},
    color: {
      legend: true,
    //   domain: [2*1e-2, 1.5*1e4], 
    //   scheme: "Observable10",
    // scheme: 'plasma',
      // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
      range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
      domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
    },
    marks: [
        Plot.tickY(
            data.filter((d) => d.estado === estado), 
            // data, 
            {
            x: "ano",
            y: "densidade",
            stroke: 'regiao',
            opacity: 0.7,
            channels: {
                Município: 'municipio',
                População: 'populacao'
            },
            // tip: true,
            tip: {
                format: {
                    Ano: true,
                    Município: true,
                    x: false,
                    stroke:false,
                    População: true,
                    y: true,
                }
            }
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

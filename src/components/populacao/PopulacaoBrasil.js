import * as Plot from "npm:@observablehq/plot";
import {format} from "https://cdn.skypack.dev/d3-format@3";
import {timeFormat, utcFormat} from "https://cdn.skypack.dev/d3-time-format@4";
import * as d3 from "d3";

const formatYear = utcFormat("%Y");

export function PopulacaoBrasil(data, {width, height} = {}) {
  return Plot.plot({
    subtitle: "212.6 milhões foi a população brasileira estimada em 2024",
    // subtitle: "42% estão no Sudeste",
    style: { fontSize: 15 },
    width,
    height:200,
    // marginLeft: 0,
    // marginRight: 45,
    marginTop:36,
    y: {
      // axis:'right',
      tickFormat: format(".2s"), 
      // domain: [170*1e6, 215*1e6], 
      type: "linear", 
      grid:true,
      label:'População brasileira',
      labelOffset:50,
      // ticks: 5, 
      // line: true, 
      nice: true
    }, 
    x : {
      label:null,
      // tickRotate:-90,
      interval: d3.utcYear,
      // ticks:10,
    },
    // color: {
    //   legend: true,
    //   scheme: "Observable10",
      // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
    //   domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
    // },
    marks: [
      Plot.barY(data, {
        x: "Ano",
        y1:170*1e6,
        y2: "populacao",
        // fill: "Regiao",
        opacity:0.5,
        // sort: { y: "x", reverse: true, limit: 27 },
        channels: {
            População: 'populacao'
        },
        // tip: true,
        tip: {
            format: {
              // Ano: false,
              x: true,
              y: false,
              População: true,
            }
        }
      }),
      // Plot.ruleY([0]),
      Plot.ruleY([170*1e6]),
    ]
  });
}






// export function PopulacaoBrasil(data, {width, height} = {}) {
//   return Plot.plot({
//     subtitle: "212.6 milhões foi a população total estimada em 2024",
//     // subtitle: "42% estão no Sudeste",
//     style: { fontSize: 15 },
//     width,
//     height:200,
//     marginLeft: 0,
//     marginRight: 45,
//     marginTop:36,
//     y: {
//       axis:'right',
//       tickFormat: format(".3s"), 
//       domain: [170*1e6, 215*1e6], 
//       type: "linear", 
//       grid:true,
//       label:'População',
//       labelOffset:50,
//       // ticks: 5, 
//       // line: true, 
//       nice: true
//     }, 
//     x : {
//       label:null,
//       ticks:10,
//     },
//     // color: {
//     //   legend: true,
//     //   scheme: "Observable10",
//       // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
//     //   range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
//     //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
//     //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
//     //   domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
//     // },
//     marks: [
//       Plot.lineY(data, {
//         x: "aaaa",
//         y: "populacao",
//         // fill: "Regiao",
//         opacity:1,
//         curve: 'catmull-rom',
//         // sort: { y: "x", reverse: true, limit: 27 },
//         // channels: {
//         //     Capital: 'Capital',
//         //     Estado: 'Estado'
//         // },
//         // tip: true,
//         // tip: {
//         //     format: {
//         //         fill:false,
//         //         y: false,
//         //         Estado: true,
//         //         Capital: true,
//         //         x: true,
//         //     }
//         // }
//       }),
//       Plot.ruleY([170*1e6]),
//       Plot.areaY(data, {
//         x: "aaaa",
//         y1:170*1e6,
//         y2: "populacao",
//         opacity:0.1,
//       }),
//       Plot.ruleX(data, Plot.pointerX({x: "aaaa", py: "populacao", stroke: "red"})),
//       Plot.dot(data, Plot.pointerX({x: "aaaa", y: "populacao", stroke: "red"})),
//       Plot.text(data, 
//         Plot.pointerX({
//           px: "aaaa", 
//           py: "populacao", 
//           dy: -17, 
//           frameAnchor: "top-left", 
//           fontVariant: "tabular-nums", 
//           text: (d) => [`Ano ${formatYear(d.aaaa)}`, `População ${(d.populacao/1e6).toFixed(1)} milhões`].join("   ")})),
//     ]
//   });
// }
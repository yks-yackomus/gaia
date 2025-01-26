import * as Plot from "npm:@observablehq/plot";
import {format} from "https://cdn.skypack.dev/d3-format@3";
import {timeFormat, utcFormat} from "https://cdn.skypack.dev/d3-time-format@4";
import {min, max} from "https://cdn.skypack.dev/d3@7";

const formatYear = utcFormat("%Y");

export function PopulacaoRegiao(data, regiao, {width, height} = {}) {
  return Plot.plot({
    // title: "Sudeste responde por 42% do total, e o Nordeste, por 27%",
    // subtitle: "O Sudeste representa XX%",
    style: { fontSize: 14 },
    width,
    height:200,
    marginLeft: 0,
    marginRight: 45,
    marginTop:36,
    y: {
      axis:'right',
      tickFormat: format(".2s"), 
      type: "linear", 
      grid:true,
      label:null,
    //   labelOffset:45,
      // ticks: 5, 
      // line: true, 
      nice: true,
      zero:false,
    }, 
    x : {
      label:null,
      ticks:10,
    },
    color: {
    //   legend: true,
    //   scheme: "Observable10",
      // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
      range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
      domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
    },
    marks: [
      Plot.lineY(data.filter((d) => d.regiao === regiao), {
        x: "aaaa",
        y: "populacao",
        stroke: "regiao",
        opacity:1,
        curve: 'catmull-rom',
        // sort: { y: "x", reverse: true, limit: 27 },
        // channels: {
        //     Capital: 'Capital',
        //     Estado: 'Estado'
        // },
        // tip: true,
        // tip: {
        //     format: {
        //         fill:false,
        //         y: false,
        //         Estado: true,
        //         Capital: true,
        //         x: true,
        //     }
        // }
      }),
    //   Plot.ruleY([170*1e6]),
      Plot.axisY(data.filter((d) => d.regiao === regiao), {
        domain: [(d) => min(d.populacao), (d) => max(d.populacao)], 
      }),
    //   Plot.areaY(data.filter((d) => d.regiao === regiao), {
    //     x: "aaaa",
    //     // y1: (d) => min(d.populacao),
    //     // zero:false,
    //     domain: [(d) => min(d.populacao), (d) => max(d.populacao)], 
    //     y2: "populacao",
    //     fill:'regiao',
    //     opacity:0.7,
    //   }),
      Plot.ruleX(data.filter((d) => d.regiao === regiao), Plot.pointerX({x: "aaaa", py: "populacao", stroke: "red"})),
      Plot.dot(data.filter((d) => d.regiao === regiao), Plot.pointerX({x: "aaaa", y: "populacao", stroke: "red"})),
      Plot.text(data.filter((d) => d.regiao === regiao), 
        Plot.pointerX({
          px: "aaaa", 
          py: "populacao", 
          dy: -17, 
          frameAnchor: "top-left", 
          fontVariant: "tabular-nums", 
          text: (d) => [`Ano: ${formatYear(d.aaaa)}`, `${regiao}: ${(d.populacao/1e6).toFixed(1)} milhões`].join("   ")})),
    ]
  });
}

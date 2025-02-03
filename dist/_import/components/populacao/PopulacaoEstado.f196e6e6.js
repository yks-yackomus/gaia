import * as Plot from "../../../_npm/@observablehq/plot@0.6.16/7bc4434c.js";
import {format} from "https://cdn.skypack.dev/d3-format@3";

export function PopulacaoEstado(data, {width, height} = {}) {
  return Plot.plot({
    // title: "MG e SP têm 27% dos 5570 municípios brasileiros",
    // subtitle: "Roraima, apenas 15 municípios",
    subtitle: "SP, MG e RJ formaram 40% da população brasileira em 2024",
    width,
    height,
    marginLeft: 30,
    marginRight: 0,
    marginTop:40,
    // x: {
    //     tickFormat: format(",.1s"),
    // },
    y: { label: null },
    style: { fontSize: 15},
    color: {
      legend: true,
    //   scheme: "Observable10",
      // range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
      range: ["#3ca951", "#ff725C", "#4269D0", "#6cc5b0", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#a463f2", "#efb118"],
    //   range: ["#3ca951", "#6cc5b0", "#4269D0", "#97bbf5", "#a463f2"],
      domain: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"]
    },
    marks: [
      Plot.barX(data, {
        x: "populacao",
        y: "uf",
        fill: "regiao",
        opacity:0.7,
        sort: { y: "x", reverse: true, limit: 27 },
        channels: {
            População: 'populacao',
            UF: 'uf_nome'
        },
        // tip: true,
        tip: {
            format: {
                fill:false,
                y: false,
                UF: true,
                População: true,
                x: false,
            }
        }
      }),
      Plot.ruleX([0]),
      Plot.gridX(),
      Plot.axisX({
        anchor:'top',
        labelAnchor:'left',
        label: 'População por Unidade Federativa',
        labelOffset:40,
        tickFormat: format(",.2s"),
      }),
  
    //   Plot.text(data, {
    //     text: "Municipios",
    //     y: "Estado",
    //     x: "Municipios",
    //     textAnchor: "end",
    //     dx: 21,
    //     sort: { y: "x", reverse: true, limit: 23 }
    //     // fill: "white"
    //   })
    ]
  });
}

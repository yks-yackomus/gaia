import * as Plot from "../../../_npm/@observablehq/plot@0.6.16/7bc4434c.js";

export function MunicipiosUF(data, {width, height} = {}) {
  return Plot.plot({
    title: "MG e SP têm 27% dos 5570 municípios brasileiros",
    subtitle: "Roraima, apenas 15 municípios",
    width,
    height,
    marginLeft: 30,
    marginRight: 0,
    marginTop:36,
    // x: { axis: 'top' },
    y: { label: null },
    style: { fontSize: 15 },
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
        x: "Municipios",
        y: "UF",
        fill: "Regiao",
        opacity:0.7,
        sort: { y: "x", reverse: true, limit: 27 },
        channels: {
            Capital: 'Capital',
            Estado: 'Estado'
        },
        // tip: true,
        tip: {
            format: {
                fill:false,
                y: false,
                Estado: true,
                Capital: true,
                x: true,
            }
        }
      }),
      Plot.ruleX([0]),
      Plot.gridX(),
      Plot.axisX({
        anchor:'top',
        labelAnchor:'left',
        label: 'Número de municípios por estado',
        labelOffset:40,
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

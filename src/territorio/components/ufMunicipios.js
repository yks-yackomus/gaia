import * as Plot from "npm:@observablehq/plot";

export function ufMunicipios(data, {width, height} = {}) {
  return Plot.plot({
    title: "Somados, MG e SP têm 27% dos 5570 municípios brasileiros",
    subtitle: "Roraima, apenas 15 municípios",
    width,
    height,
    marginLeft: 20,
    marginRight: 0,
    x: { axis: 'top' },
    y: { label: null },
    color: {
      legend: true,
    //   scheme: "Observable10",
    //   range: ["#3ca951", "#ff8ab7", "#4269D0", "#6cc5b0", "#efb118"],
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
        opacity:0.9,
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
      Plot.gridX()
  
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

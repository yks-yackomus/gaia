---
theme: dashboard
title: Gaia
---

## Municípios

```js
import {ufMunicipios} from './territorio/components/ufMunicipios.js'
```

```js
const dataMunicipios = FileAttachment("./data/territorio/p-municipios-por-estado.csv").csv({
    typed:true
});
```

<div class="grid grid-cols-2">
  <div class="card">
    ${resize((width) => ufMunicipios(dataMunicipios))}
  </div>
</div>

## População
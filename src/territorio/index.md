---
theme: dashboard
title: Territorio
---

```js
import {ufMunicipios} from './components/ufMunicipios.js'
```

```js
const dataMunicipios = FileAttachment("../data/territorio/p-municipios-por-estado.csv").csv({
    typed:true
});
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => ufMunicipios(dataMunicipios))}
  </div>
</div>
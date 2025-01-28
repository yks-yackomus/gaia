---
theme: dashboard
title: Gaia
---

### Municípios

```js
import {MunicipiosUF} from './components/territorio/MunicipiosUF.js'

const municipiosUF = FileAttachment("./data/territorio/p-municipios-por-estado.csv").csv({
    typed:true
});
```

<div class="grid grid-cols-2">
  <div class="card">
    ${resize((width) => MunicipiosUF(municipiosUF))}
  </div>
</div>

### População

```js
import {PopulacaoEstado} from './components/populacao/PopulacaoEstado.js'

const populacaoEstado = FileAttachment("./data/populacao/p-populacao-estado.csv").csv({
    typed:true
});
```

<div class="grid grid-cols-2">
  <div class="card">
    ${resize((width) => PopulacaoEstado(populacaoEstado))}
  </div>
</div>

```js
import {PopulacaoBrasil} from './components/populacao/PopulacaoBrasil.js'

const populacaoBrasil = FileAttachment("./data/populacao/p-populacao-brasil.csv").csv({
    typed:true
});
```



```js
import {PopulacaoRegiao} from './components/populacao/PopulacaoRegiao.js'

const populacaoRegiao = FileAttachment("./data/populacao/p-populacao-regiao.csv").csv({
    typed:true
});
```

```js
const regiaoInput = Inputs.select(populacaoRegiao.map((d) => d.regiao), {unique: true, sort: true, label: null, width:120});
const regiaoChosen = Generators.input(regiaoInput);
```

<div class="grid grid-cols-2">
  <div class="card">
    ${resize((width) => PopulacaoBrasil(populacaoBrasil))}
  </div>
</div>

### Densidade Demográfica

```js
import {DensidadeMunicipio} from './components/populacao/DensidadeMunicipio.js'

const densidadeMunicipio = FileAttachment("./data/populacao/p-densidade-municipio.csv").csv({
    typed:true
});
```

```js
const estadoInput = Inputs.select(densidadeMunicipio.map((d) => d.estado), {unique: true, sort: true, label: null, width:120});
const estadoChosen = Generators.input(estadoInput);
```

<div class="grid grid-cols-2">
  <div class="card">
    ${resize((width) => DensidadeMunicipio(densidadeMunicipio, estadoChosen))}
  </div>
</div>
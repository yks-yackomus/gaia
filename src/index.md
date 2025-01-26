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
    ${resize((width) => PopulacaoRegiao(populacaoRegiao, regiaoChosen))}
    ${regiaoInput}
  </div>
</div>
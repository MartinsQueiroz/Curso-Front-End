# Bootstrap
- Framework ou biblioteca de desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid system
- Responsivo
- Mobile-First
- Amplamente utilizada
- Cross browser

## Biblioteca x Framework
- Biblioteca: Oferece objetos / classes prontas para uso
- Framework: Oferece um conjunto de bibliotecas
- Biblioteca: Recurso para trabalhar
- Framework: Metodologia de trabalho
- Biblioteca: Te leva ao destino
- Framework: Te ensina a chegar 

## Desenvolvimento ágil
- Metodologias: scrum, kanban, XP
- Entrega de valor para o negócio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - minimo produto viavel
- Estar envolvido x Comprometido

## Vantagens
- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

## Desvantagens 
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
 <a class="btn btn-lg">Botão</a>

```

### Sem Bootstrap
```
<a class="botao botao-grande">Botão</a>

<style>
html {
    font-size: ...
}

.botao {
    background-color: #ccc;
    border-radius: 2px;
    display: block;
    font-family: sans-serif
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin: 5px auto;
}

.botao.grande {
    font-size: 2rem;
}

.botao:hover { ... }
.botao:active { ... }
.botao:visited { ... }

</style>

```
## Componentes
- Blocos / Modelos / Templates reutilizaveis
https://getbootstrap.com/docs/5.1/components


## Helpers
- Funções básicas
- Incrementos
- Ajustes

# Exercicio
- incluir carrosel na home antes de sobre
- completar o cadastro, tornando os campos obrigatorios

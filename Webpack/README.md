# Webpack
- Empacotador de módulos JS
- Utilizado por diversos frameworks modernos como React, Angular..
- Trabalha com o Node.js

## Instalção

1. Iniciar o projeto no diretório

```

npm init -y
```

2. Instalar o webpack como dependencia de desenvolvimento
```

npm install --save-dev webpack webpack-cli
```

## Trabalhando com HTML
É necessário trabalhar com plugin para ampliar as possibilidades de uso, instalação: 

```

npm install --save-dev html-webpack-plugin
```

## Adicionando CSS
Para trabalhar com estilos também compensa adicionar algumas extensões.
- node-sass: compilador de sass para node
- sass-loader: carrega para o webpack compilar
- style-loader: injeta estilos na árvore de objetos (DOM)
- css-loader: interpreta diretivas do CSS (import,..)
- extract: extrai CSS do JS

```

npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
```
- Sistema de módulos
- Gerenciamneto de dependências
- Desenvolvimento x Produção

## Melhorando a compatibilidade do JS com Babel
Babel transforma o código JS para uma versão com maior compatibilidade para navegadores antigos

```

npm install --save-dev @babel/core @babel/preset-env babel-loader
```

## Trabalhando com imagens
Adicionar file loader

```

npm install --save-dev file-loader
```

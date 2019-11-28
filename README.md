# UFLANews

Este é um projeto realizado para a disciplina GCC132 - Modelagem e Implementação de Software na Universidade Federal de Lavras (UFLA). O objetivo do projeto é desenvolver um aplicativo contendo boletins eletrônicos feito por órgãos da UFLA, tais como empresas júniors e pró-reitorias. A maior motivação para a realização deste projeto é que muitos da comunidade UFLA recebem notícias fora de seu interesse, ao mesmo tempo que perdem muitas das que julgam significativas devido a grande quantidade de informações recebidas.

## Principais Funcionalidades

O aplicativo contará com diversos publicadores de conteúdo e os usuários finais poderão seguir esses publicadores a fim de obter as notícias sobre os mesmos. O aplicativo poderá ser usado somente por usuários cadastrados no sistema e estes poderão buscar por publicadores a partir do nome dos mesmos.

As notícias dos publicadores serão em formato de boletins eletrônicos, cada um possuindo uma ou mais sessões. Um usuário poderá dar ou remover *likes* e comentários a um boletim eletrônico.

**Observações**: Mais funcionalidades poderão ser adicionadas, mas, inicialmente, serão essas implementadas.


## Documentação

* [Casos de Uso](https://github.com/samurai-753/ufla-news-app/blob/master/documentacao/casos_de_uso.png)
* [Documento de Requisitos](https://github.com/samurai-753/ufla-news-app/blob/master/documentacao/documento_de_requisitos.pdf)
* [Protótipo](https://github.com/samurai-753/ufla-news-app/tree/master/documentacao/prototipo)

## Ferramentas Utilizadas

* JSON Server: para simular o back-end
* React Native: para desenvolver o front-end da aplicação


## Modo de Instalação

### Preparação do ambiente
Siga o tutorial abaixo para a preparar o ambiente de desenvolvimento:

[Reactive Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started)

### Git
É necessário a instalação do git. Abaixo segue um tutorial.

[Install Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)


### Execução
Primeiramente é necessário clonar o repositório. Utilize o comando abaixo para isso.
```
$ git clone https://github.com/samurai-753/ufla-news-app/
```
Após isso acesse a pasta do repositório e execute o comando abaixo para instalar as dependências do aplicativo.
```
$ npm install
```
Execute o comando abaixo para iniciar o metro bundle.
```
$ npm start
```
Execute o comando abaixo para instalar o aplicativo no android. (OBS: é necessário que o smartphone esteja conectado ao computador)
```
$ react-native run-android
```


## Desenvolvedores

* Arthur Henrique Sousa Cruz
* Breno Gomes Cardoso
* Eduardo Fernando de Lima
* Gabriel Ribeiro Oliveira
* João Pedro Teodoro Silva
* Pedro Silveira Lopes

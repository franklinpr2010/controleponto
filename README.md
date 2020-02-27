# Ponto Inteligente Cliente
Código cliente Angular 9 do sistema de controle de ponto.
### Como executar a aplicação

O projeto aqui desenvolvido utiliza como padrão o Angular 5, porém com um pequeno ajuste ele pode ser totalmente acompanhado seguindo o novo Angular 9!

O Angular 9 tem como requisito ao menos a versão 10 do NodeJS, portanto certifique-se de ter o NodeJS 10 ou superior instalado em seu computador antes de prosseguir. Verifique a versão atual do seu NodeJS com o seguinte comando no terminal:

node --version 

Certifique-se de ter instalada a última versão do Angular CLI com o seguinte comando (talvez seja necessário executar o comando como adminstrador do sistema):

npm install -g @angular/cli@latest 

Para verificar se a instalação está correta, execute o seguinte comando para verificar a instalação:

ng --version 

Você deverá receber uma mensagem no terminal com a versão do Angular CLI, que deverá ser algo parecido "Angular CLI: 9.0.1", significando que a versão 9.x.x foi instalada no sistema.

Por último será necessário um pequeno ajuste no RxJS, que é o responsável pelos recursos reativos. Para que ele funcione corretamente será necessário adicionar o seguinte pacote ao projeto.

Execute o seguinte comando na raiz da aplicação:

npm install rxjs-compat --save 

```

npm install -g @angular/cli
npm install
npm start
```
Acesse a aplicação em [http://localhost:4200](http://localhost:4200)  

*Para sua execução certifique-se também de possuir o [NodeJS](http://nodejs.org).*  
*A instalação do @angular/cli acima pode necessitar ser executada como admin do sistema*  

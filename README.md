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

Para criar um projeto no angular basta executar o comando.

ng new controleponto

Para executar o projeto basta executar o comando:

ng serve --aot

Logo após digite a URL: localhosyt:4200

Instalar o angular material

ng add @angular/material

https://material.angular.io/guide/getting-started  

npm install --save @angular/material @angular/cdk @angular/animations hammerjs @angular/flex-layout   



Bibiotecas que serão importadas no projeto:

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';





Por último será necessário um pequeno ajuste no RxJS, que é o responsável pelos recursos reativos. Para que ele funcione corretamente será necessário adicionar o seguinte pacote ao projeto.

Execute o seguinte comando na raiz da aplicação:

npm install rxjs-compat --save 

Como criar um modulo na aplicação:

ng g module autenticacao/login





```

npm install -g @angular/cli
npm install
npm start
```
Acesse a aplicação em [http://localhost:4200](http://localhost:4200)  

*Para sua execução certifique-se também de possuir o [NodeJS](http://nodejs.org).*  
*A instalação do @angular/cli acima pode necessitar ser executada como admin do sistema*  

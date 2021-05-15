import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { SobreComponent } from './institucionnal/sobre/sobre.component';
import { ContatoComponent } from './institucionnal/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoService } from './produtos/produtos.service'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [    
    {provide: APP_BASE_HREF, useValue: '/'},
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

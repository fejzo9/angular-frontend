import { UserService } from './user/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
import { CarComponent } from './car/car.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ModelComponent } from './model/model.component';
import { PartComponent } from './part/part.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ManufacturerComponent,
    ModelComponent,
    PartComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        TagsComponent,
        ProductPageComponent,
        LoginComponent,
        RegisterComponent,
        CartPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MatDialogModule,
        AppRoutingModule
    ]
})
export class AppModule { }

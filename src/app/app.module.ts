import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        CategoriesComponent,
        ProductPageComponent,
        LoginComponent,
        RegisterComponent,
        CartPageComponent,
        NotfoundComponent
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

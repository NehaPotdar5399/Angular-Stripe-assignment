import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {StripeModule} from 'stripe-angular';
import { PaymentComponent } from './payment/payment.component';
import { SliderComponent } from './slider/slider.component';
import { NgxStripeModule } from 'ngx-stripe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    ProductDetailsComponent,
    PaymentComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot("pk_test_51Leen4SHmDLVBwLpwcVyj1CsQe4Vdvdt9ivQYPohdyHbn1MKwtLLyEgZ3zRCp9nRizLED5lCWe1BA3GvMjf4kuvf00SA5cS4KA")
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

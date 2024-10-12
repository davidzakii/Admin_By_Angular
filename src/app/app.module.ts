import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { OrdersComponent } from './orders/orders.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserChildComponent } from './user-child/user-child.component';
import { RequestInterceptor } from './request.interceptor';
import { AuthService } from './shared/auth.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
// import { DemoFileComponent } from './demo-file.compoenent';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderDetailsComponent } from './order-details/order-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogComponent,
    ProductsComponent,
    OrdersComponent,
    LoginComponent,
    UsersComponent,
    UserChildComponent,
    MatConfirmDialogComponent,
    OrderDetailsComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatChipsModule,
    MaterialFileInputModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
  useClass:RequestInterceptor ,
  multi:true
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }

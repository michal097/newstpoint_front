import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ImportCsvComponent} from './import-csv/import-csv.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {ListUsersComponent} from './list-users/list-users.component';
import {DeleteAllComponent} from './delete-all/delete-all.component';
import {DeleteAllDialogComponent} from './delete-all/delete-all-dialog/delete-all-dialog.component';
import {OldestUserComponent} from './oldest-user/oldest-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImportCsvComponent,
    ListUsersComponent,
    DeleteAllComponent,
    DeleteAllDialogComponent,
    OldestUserComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteAllDialogComponent]
})
export class AppModule {
}

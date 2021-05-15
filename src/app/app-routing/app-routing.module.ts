import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ImportCsvComponent} from "../import-csv/import-csv.component";
import {ListUsersComponent} from "../list-users/list-users.component";
import {DeleteAllComponent} from "../delete-all/delete-all.component";
import {OldestUserComponent} from "../oldest-user/oldest-user.component";
import {SearchComponent} from "../search/search.component";


const routes: Routes = [
  {path: '', component: ImportCsvComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'delete', component: DeleteAllComponent},
  {path: 'oldest', component: OldestUserComponent},
  {path: 'search', component: SearchComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

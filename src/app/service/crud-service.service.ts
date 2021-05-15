import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) {
  }

  url: string = 'https://newspoint-backend.herokuapp.com';


  upload(file: File): Observable<any> {

    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.url + `/uploadFile`, formData);
  }

  getAllUsers(page, size): Observable<any> {
    return this.http.get(this.url + `/allUsersPagination/${page}/${size}`);
  }

  getAllUsersLen() {
    return this.http.get(this.url + `/getCountUsers`, {responseType: 'text'});

  }

  deleteSpecUser(id): Observable<any> {
    return this.http.delete(this.url + `/deleteSpecUser/${id}`)
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(this.url + `/deleteAll`);
  }

  getOldestPerson(): Observable<any> {
    return this.http.get(this.url + `/oldestUser`);
  }

  makeSearch(phrase): Observable<any> {
    return this.http.get(this.url + `/search/${phrase}`)
  }
}

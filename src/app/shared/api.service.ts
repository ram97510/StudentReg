import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }


    // Get Method For All Student
    getmethod()
    {
      return this._http.get<any>("https://jsonplaceholder.typicode.com/posts").pipe(map((res:any)=> {
        return res
      }))
    }

}

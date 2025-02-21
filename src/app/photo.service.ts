import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface UnsplashResponse {
  urls: {
      regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor(private http: HttpClient) { }
  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 
        'Client-ID MyhaX1V19WRP_fTO4CCwygV7ygL6O_pupf4oNPkvy_8'
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class AppService {
  
  constructor(private http: HttpClient) {}

  onGetAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
    
  }

  onGetBlockCountries(abb: string) {
    return this.http.get('https://restcountries.eu/rest/v2/regionalbloc/' + abb);
  }

  onGetCode(ab: string) {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + ab);
  }
}

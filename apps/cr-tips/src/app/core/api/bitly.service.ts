import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ShortenLink} from '@cr-tips/data'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  constructor(private http:HttpClient) { }

  shortenLink(url: string): Observable<ShortenLink>{
    return this.http.post<ShortenLink>('https://api-ssl.bitly.com/v4/shorten', {group_guid: environment.group_guid, long_url:url}, {headers: new HttpHeaders({
      'Authorization': environment.bitlyToken
    })})
  }

}

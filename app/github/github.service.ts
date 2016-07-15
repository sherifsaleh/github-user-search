import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
    private username='paulirish';
    private client_id= '48f9f4d4c7884eb690a4';
    private client_secret= '38d7e2fcf71955209bca56ae1a1827f4f004256c';
    constructor(private _http: Http) {
    }
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }
    getRepos() {
        return this._http.get('https://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }
    updateUsername( username: any ){
        this.username = username;
    }

    getTweets(){
        return this._http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4')
                .map(res => res.json());
    }
}

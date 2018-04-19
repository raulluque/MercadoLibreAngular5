import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MeliService } from '../mercadolibre/meli.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition()]
})
export class AuthComponent implements OnInit {
  authUrl:string;
  authorization_code:string;
  credentials:any[];
  isLoggedIn:boolean = false;
  access_token:string;
  constructor(public meli : MeliService,public route : ActivatedRoute, public db: AngularFireDatabase) { 
    this.authUrl = meli.getAuthURL();
    db.list('/credentials').valueChanges().subscribe(token => {
      this.credentials = token;
      console.log(this.credentials);
      if (token.length > 0) {
          this.isLoggedIn = true;
      }
    });

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => { 
        this.authorization_code = params['code'] || null;
        if(this.authorization_code){
          this.meli.authorize(this.authorization_code).subscribe(
            data => { 
              if(data.access_token){
                const itemRef = this.db.object('credentials');
                this.access_token = data.access_token
                itemRef.set({ access_token: data.access_token,refresh_token:data.refresh_token,user_id:data.user_id});

                console.log("nuevo acceso",data.access_token);
               }
            },
            err => console.error(err),
          );
        }
      });
  }

}

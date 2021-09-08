import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    console.log('Siguiente');
    /*var modelo = this;
    
    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000);*/
    setTimeout(() =>{
      this.rutas.navigate(['home']);
    }, 2000);
  }



}

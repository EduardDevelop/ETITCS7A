import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
   this.GetEstudiantes();
  }

  public GetEstudiantes(){
    var response=this.api.get("Estudiantes")
    console.log(response);
    
  }


 
}

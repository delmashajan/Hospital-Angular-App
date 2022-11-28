import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  pid=""

  readValue=()=>
  {
    let data:any={
      "pid":this.pid
    }
    console.log(data)
  }

}

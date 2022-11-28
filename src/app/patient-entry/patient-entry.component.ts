import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  pname=""
  pid=""
  address=""
  cno=""
  dateappointment=""
  pimage=""
  dname=""


  readValue=()=>
  {
    let data:any={
      "pname":this.pname,
  "pid":this.pid,
  "address":this.address,
  "cno":this.cno,
  "dateappointment":this.dateappointment,
  "pimage":this.pimage,
  "dname":this.dname

    }

    console.log(data)
  }

}

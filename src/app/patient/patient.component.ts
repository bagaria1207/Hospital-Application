import { NotificationService } from './../shared/notification.service';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public service: EmployeeService, 
    private notifservice: NotificationService,
    private dialogRef: MatDialogRef<PatientComponent>) { }

    maxDate: Date = new Date();

  ngOnInit() {
    this.service.getPatients();
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeformGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
        this.service.insertPatient(this.service.form.value);
      else
        this.service.updatePatient(this.service.form.value);
      this.service.form.reset();
      this.service.initializeformGroup();
      this.notifservice.success("Submitted Successfully");
      this.onClose();
    }
  }
 
  onClose(){
    this.service.form.reset();
    this.service.initializeformGroup();
    this.dialogRef.close();
  }

}

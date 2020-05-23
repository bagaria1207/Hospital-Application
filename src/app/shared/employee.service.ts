import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }

  patientList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    gender: new FormControl('Male'),
    email: new FormControl('', Validators.email),
    number: new FormControl('', [Validators.required, Validators.minLength(10)]),
    disease: new FormControl(''),
    admitPatient: new FormControl('')
  });

  initializeformGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      gender: 'Male',
      email: '',
      number: '',
      disease: '',
      admitPatient: ''
    });
  }

  getPatients() {
    this.patientList = this.firebase.list('patients');
    return this.patientList.snapshotChanges();
  }

  insertPatient(patient){
    this.patientList.push({
      name: patient.name,
      gender: patient.gender,
      email: patient.email,
      number: patient.number,
      disease: patient.disease,
      admitPatient: patient.admitPatient == "" ? "" : this.datePipe.transform(patient.admitPatient, 'yyyy-MM-dd')
    });
  }

  updatePatient(patient){
    this.patientList.update(patient.$key,
      {
      name: patient.name,
      gender: patient.gender,
      email: patient.email,
      number: patient.number,
      disease: patient.disease,
      admitPatient: patient.admitPatient
    });
  }

  deletePatient(patient){
    this.patientList.remove(patient.$key);
  }

  populateForm(patient){
    this.form.setValue(patient);
  }

}

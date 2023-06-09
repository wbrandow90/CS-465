import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve tripId
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something went wrong. Could not find tripCode!");
      this.router.navigate(['']);
      return;
    }

    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        // Don't use editForm.setValue() as it will throw console error
        this.editForm.patchValue(data[0]);
      })
  }

  onSubmit() {
    console.log('Inside editTripComponenet#onSubmit()')
    this.submitted = true;
    if (this.editForm.valid) {
      console.log('form is valid');
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

  private deleteTrip(): void {
    let tripCode = localStorage.getItem('tripCode');
    this.tripService.deleteTrip(tripCode);
    this.router.navigate(['']);
  }

}

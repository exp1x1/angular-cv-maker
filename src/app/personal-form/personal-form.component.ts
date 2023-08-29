import { Component, OnInit } from "@angular/core";
import { CvdataService } from "../cvdata.service";

@Component({
  selector: "app-personal-form",
  templateUrl: "./personal-form.component.html",
  styleUrls: ["./personal-form.component.css"],
})
export class PersonalFormComponent implements OnInit {
  constructor(public cvData: CvdataService) {}

  formData = this.cvData.formData;
  eduData = this.cvData.edu;
  expData = this.cvData.exp;

  onSubmit() {
    console.log(this.expData.value);
  }

  ngOnInit(): void {}
}

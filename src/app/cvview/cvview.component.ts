import { Component, OnInit } from "@angular/core";
import { CvdataService } from "../cvdata.service";

@Component({
  selector: "app-cvview",
  templateUrl: "./cvview.component.html",
  styleUrls: ["./cvview.component.css"],
})
export class CvviewComponent implements OnInit {
  constructor(public cvData: CvdataService) {}

  data = this.cvData.formData;
  eduData = this.cvData.edu;
  expData = this.cvData.exp;



  ngOnInit(): void {}
}

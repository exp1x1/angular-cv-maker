import { Injectable } from "@angular/core";
import { FormBuilder, FormArray, FormArrayName } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CvdataService {
  constructor(private fb: FormBuilder) {}

  formData = this.fb.group({
    firstName: [""],
    lastName: [""],
    phoneNumber: [""],
    email: [""],
    skills: [""],
    edu: this.fb.array([
      this.fb.group({
        degName: ["some deg name"],
        schoolName: ["some school name"],
        finYear: ["aug 2020"],
      }),
    ]),
    exp: this.fb.array([
      this.fb.group({
        jobTitle: ["web dev"],
        compName: ["some comp name"],
        startMonth: ["aug 2023"],
        endMonth: ["sep 2023"],
        expSummary: ["job summary"],
      }),
    ]),
  });

  addEdu() {
    this.edu.push(
      this.fb.group({
        degName: [""],
        schoolName: [""],
        finYear: [""],
      })
    );
  }

  addExp() {
    this.exp.push(
      this.fb.group({
        jobTitle: [""],
        compName: [""],
        startMonth: [""],
        endMonth: [""],
        expSummary: [""],
      })
    );
  }

  removeEdu(index: number) {
    this.edu.removeAt(index);
  }
  removeExp(index: number) {
    this.exp.removeAt(index);
  }

  get edu() {
    return this.formData.get("edu") as FormArray;
  }

  get exp() {
    return this.formData.get("exp") as FormArray;
  }
}

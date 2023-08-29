import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { CvviewComponent } from "./cvview/cvview.component";

@NgModule({
  declarations: [AppComponent, PersonalFormComponent, CvviewComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

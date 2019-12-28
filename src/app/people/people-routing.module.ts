import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PersonDetailComponent } from "./person-detail.component";

const routes = [
  {
    path: "people/persondetail",
    component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

import {NgModule} from "@angular/core";
import {PricePipe} from "./price.pipe";

@NgModule({
  exports: [
    PricePipe
  ],
  declarations: [
    PricePipe
  ]
})

export class PipesModule {}

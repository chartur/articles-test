import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {WizardModel} from "../models/WizardModel";

@Injectable({
  providedIn: 'root'
})
export class WizardProvider {

  private _currentWizard: BehaviorSubject<WizardModel> = new BehaviorSubject<WizardModel>(null)

  public readonly currentWizardStream$: Observable<WizardModel> = this._currentWizard.asObservable();

  setCurrentWizard(wizard: WizardModel): void {
    this._currentWizard.next(wizard);
  }
}

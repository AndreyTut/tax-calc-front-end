import {Component} from '@angular/core';
import {TaxDetails} from "../model/TaxDetails";
import {TaxService} from "../service/tax.service";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.css'
})
export class TaxComponent {
  salary: string = '';
  textDetails: TaxDetails;
  taxService: TaxService;

  constructor(taxService: TaxService) {
    this.taxService = taxService;
  }

  getTaxDetails() {
    this.taxService.getTaxDetails(this.salary).subscribe(it => this.textDetails = it);
  }
}

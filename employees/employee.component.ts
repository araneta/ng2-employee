import {Component,ViewChild, AfterViewInit} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';


@Component({
  selector: 'employee',
  template: `
  <ba-card title="Modals" class="modal-buttons">
	<button class="btn btn-success" (click)="showChildModal()">Tambah Pegawai</button>
	
  </ba-card>
  	<employee-table></employee-table>
  <!-- Large modal -->
<div bsModal #childModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" (click)="hideChildModal()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Form Pegawai</h4>
      </div>
      <div class="modal-body">
        <employee-input #inputEmployee></employee-input>
      </div>
      <div class="modal-footer">
		<button class="btn btn-danger" (click)="inputEmployee.reset()">Clear</button>
        <button class="btn btn-primary confirm-btn" (click)="inputEmployee.clickSave()">Save</button>
      </div>
    </div>
  </div>
</div>
`
})
export class EmployeeComponent {
  constructor() {}
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}

import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ScheduleService} from '../../schedule.service';



@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    constructor(private scheduleService: ScheduleService) {
    }

    ngOnInit() {
    }

    openModal() {
    }

    closeModal() {
    }

    onSubmit(form: NgForm) {
        this.scheduleService.getRow(form.value);
    }

}

import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Field } from '../../models/field';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() submitText: string = "Registrar";

  @Input() form!: Array<Field>;
  @Input() formGroup!: FormGroup;

  @Output() formGroupEmitter = new EventEmitter<FormGroup>();

  // @ViewChild("guestId") selectName?: ElementRef;
  // @ViewChild("roomType") selectRoomType?: ElementRef;

  public submit() {

    // let array = [];
    // if (this.selectName) array.push(this.selectName);


    this.formGroupEmitter.emit();
  }
}

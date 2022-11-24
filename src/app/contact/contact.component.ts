import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactType, Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  agree: boolean;

  faPhone = faPhone
  faEnvelope = faEnvelope
  faSkype = faSkype

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform')
  feedbackFormDirective: any;

  formErrors: any =  {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  }

  validationMessages: any = {
    'firstname':{
      'required': 'First name is requiredi',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'lastname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'telnum': {
      'required': 'Telephone number is required',
      'pattern': 'Telephone number only can be number characters'
    },
    'email': {
      'required': 'Telephone number is required',
      'email': 'Email not in valid format'
    }
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contactType: 'None',
      message: ''
    })
    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data))
    this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any){
    if(!this.feedbackForm){
      return
    }
    const form = this.feedbackForm
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        // clear prev error message
        this.formErrors[field] = ''
        const control = form.get(field)
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field]
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' '
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'None',
      message: ''
    })
    this.feedbackFormDirective.resetForm()
  }
}

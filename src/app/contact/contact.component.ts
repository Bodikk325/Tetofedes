import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  error = false;
  success = false;
  loading = false;

  constructor(private fb: FormBuilder, private http : HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      note: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.error = false;
    this.success = false;
    this.loading = true;
    if (this.contactForm.valid) {
      let body = new HttpParams();
      body = body.set('name', this.contactForm.value['name']);
      body = body.set('phone', this.contactForm.value['phone']);
      body = body.set('email', this.contactForm.value['email']);
      body = body.set('note', this.contactForm.value['note']);
      this.http.post('https://tetojavitas-most.hu/tetoEmail.php', body).subscribe(
        {
          next : (_) => {
            this.success = true;
            this.loading = false;
          },
          error : (error) => {
            console.log(error.error)
            this.error = true;
            this.loading = false;
          }
        }
      );
    }
  }
}

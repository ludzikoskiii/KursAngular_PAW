import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule], // FormsModule = Template Form, ReactiveFormsModule = Reactive Form
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

  // ===== TEMPLATE FORM =====
  // Dane formularza przechowujemy bezpośrednio w obiekcie (two-way binding z ngModel)
  templateFormData = {
    imie: '',
    email: '',
    wiek: null
  };

  onTemplateFormSubmit() {
    console.log('Template Form:', this.templateFormData); // logujemy dane do konsoli
    alert(`Wysłano: ${this.templateFormData.imie}, ${this.templateFormData.email}`);
  }

  // ===== REACTIVE FORM =====
  // Formgroup grupuje wiele FormControl-i w jeden formularz
  reactiveForm = new FormGroup({
    // FormControl(wartoscPoczatkowa, [walidatory])
    imie:    new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:   new FormControl('', [Validators.required, Validators.email]),
    haslo:   new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // Gettery ułatwiają dostęp do kontrolek w HTML
  get imie()  { return this.reactiveForm.get('imie'); }
  get email() { return this.reactiveForm.get('email'); }
  get haslo() { return this.reactiveForm.get('haslo'); }

  onReactiveFormSubmit() {
    if (this.reactiveForm.valid) {
      console.log('Reactive Form:', this.reactiveForm.value);
      alert(`Wysłano: ${this.reactiveForm.value.imie}`);
    }
  }
}

import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
    public formMessage!: string;

    public onSubmitForm() {
        return this.formMessage = 'Formulário enviado com sucesso!';
    }
}

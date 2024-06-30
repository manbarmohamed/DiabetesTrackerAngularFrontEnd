import { Component, OnInit } from '@angular/core';
import { Glycemie } from '../glycemie';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GlycemieService } from '../glycemie.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  glycemies: Glycemie[] = [];
  glycemieForm!: FormGroup;
  show = false;

  constructor(
    private glycemieService: GlycemieService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.glycemieService.getAllGlycemie().subscribe((data) => {
      this.glycemies = data;
    });

    this.glycemieForm = this.fb.group({
      date: [''],
      level: [''],
    });
  }

  hundelSubmit() {
    this.glycemieService.addGlycemie(this.glycemieForm.value).subscribe();
    console.log(this.glycemieForm.value);
    this.ngOnInit();
  }

}

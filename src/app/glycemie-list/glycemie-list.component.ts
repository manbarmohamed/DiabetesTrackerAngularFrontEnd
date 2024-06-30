import { Component, OnInit } from '@angular/core';
import { Glycemie } from '../glycemie';
import { GlycemieService } from '../glycemie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-glycemie-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './glycemie-list.component.html',
  styleUrl: './glycemie-list.component.css',
})
export class GlycemieListComponent implements OnInit {
  glycemies: Glycemie[] = [];
  glycemieForm!: FormGroup;

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

  delete(id:number){
    this.glycemieService.delete(id).subscribe();
    this.ngOnInit()
  }
}

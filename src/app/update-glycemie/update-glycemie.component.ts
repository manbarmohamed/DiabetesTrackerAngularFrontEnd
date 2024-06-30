import { Component, OnInit } from '@angular/core';
import { Glycemie } from '../glycemie';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GlycemieService } from '../glycemie.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-update-glycemie',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './update-glycemie.component.html',
  styleUrl: './update-glycemie.component.css'
})
export class UpdateGlycemieComponent implements OnInit {
  glycemieToBeUpdated!: Glycemie;

  updatedForm!: FormGroup;
  show: boolean=false;

  constructor(private glycemieService: GlycemieService, private fb: FormBuilder, private rout: ActivatedRoute){}
  

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    if(id){
    this.glycemieService.findById(+id).subscribe(glycemie=>this.glycemieToBeUpdated=glycemie)
    }
    else{
      console.log("ID is null");
      
    }

    this.updatedForm = this.fb.group({
      date:[''],
      level:['']
    })
  }
  handelSubmitUpdate(){
    this.glycemieService.update(this.glycemieToBeUpdated.id,this.updatedForm.value).subscribe();
  }
  update(){
    this.updatedForm.setValue({
      date:this.glycemieToBeUpdated.date,
      level:this.glycemieToBeUpdated.level
    });
    this.show= !this.show;
  }
}

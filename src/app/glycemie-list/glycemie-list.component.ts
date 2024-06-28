import { Component, OnInit } from '@angular/core';
import { Glycemie } from '../glycemie';
import { GlycemieService } from '../glycemie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-glycemie-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './glycemie-list.component.html',
  styleUrl: './glycemie-list.component.css'
})
export class GlycemieListComponent implements OnInit{

  glycemies: Glycemie[]=[];
  glycemieForm! : FormGroup

  constructor(private glycemieService: GlycemieService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.glycemieService.getAllGlycemie().subscribe(data=>{
      this.glycemies = data;
    })

    this.glycemieForm=this.fb.group({
      date: [""],
      level: [""]
    });
  }

  hundelSubmit(){
    console.log("ttttttttttttttttttt")
    this.glycemieService.addGlycemie(this.glycemieForm.value).subscribe();
    console.log(this.glycemieForm.value);
    
    this.ngOnInit();
    console.log("sssssssssssssssssssss")

  }


//   saveGlycemie() {
//     let formData:FormData=new FormData();
//     formData.set('valeurBefore',this.glycemieForm.value.valeurBefore);
//     formData.set('valeurAfter',this.glycemieForm.value.valeurAfter);
    
//     this.glycemieService.addGlycemie(formData).subscribe(
//       {
//         next:value =>
//           alert('La valeur Glycemie est ajoutee avec succes')
//       }
//     )
// }
}

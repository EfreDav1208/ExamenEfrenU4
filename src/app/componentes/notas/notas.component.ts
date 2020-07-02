import { Component, OnInit } from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  form: FormGroup;

  public tituloNota:Array<string>=[];
  public titulo:string="";

  public descNota:Array<string>=[];
  public descrip:string="";
 
 
  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildFrom();
  }
  ngOnInit(): void {
  }
  private buildFrom(){
    this.form = this.formBuilder.group({
      NombreNota: ['',  [Validators.required]],
      DescripcionNota: ['',  [Validators.required]]
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }

  onButtonClick(){
    this.tituloNota.push(this.titulo);
    this.titulo='';
    console.log(this.tituloNota);
    this.descNota.push(this.descrip);
    this.descrip='';
    console.log(this.descNota);
  }





}

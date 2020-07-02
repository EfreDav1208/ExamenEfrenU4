import { Component, OnInit, EventEmitter} from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  form: FormGroup;
  public listaTarea:Array<string>=[];
  public listat:string="";
  
  
  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildFrom();
  }
  ngOnInit(){ }
  private buildFrom(){
    this.form = this.formBuilder.group({
      NombreTarea: ['',  [Validators.required]]
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
    this.listaTarea.push(this.listat);
    this.listat='';
    console.log(this.listaTarea);
  }

  onButtonEliminar(){
    this.listaTarea=[];
  }

  
}

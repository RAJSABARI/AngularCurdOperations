import { Component, model } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  delete: any;
  id: any;
  unmae: any;
  email: any;
  uu=new User();
  
  constructor(private service: ServiceService) { }
  users?: User[];
  
  // public getAll(){
    //   return this.service.getAllUsers();
    // }
    ngOnInit() {
      this.getUsers();
    }
    edituser(id:any) {
      this.service.getperson(id)
      .subscribe((emp)=>{this.uu=emp;this.getUsers()});
    }
    getone(id:any){
      this.service.getperson(id)
      .subscribe((emp)=>this.uu=emp);
    }
    addUser() {
      if(!this.uu.id){
        this.service.add(this.uu)
        .subscribe(e=>{
          this.uu=e;
          this.getUsers();
        }
        )
      }
      else{
        this.service.edit(this.uu.id,this.uu)
        .subscribe((emp)=>{this.uu=emp;this.getUsers()});
        
      }
     
    }
  
  getUsers(): void {
    this.service.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  deleteuser(id: any) {
    this.service.delete(id).subscribe(() => {
      this.getUsers();
    })

  }
  
}

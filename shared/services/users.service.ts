import { Injectable } from "@angular/core";
import { UserInterface } from "../types/user.interface";
import { BehaviorSubject } from "rxjs";



@Injectable()

export class UsersService {
  
  // utilService = inject( UtilsService);
  // users:UserInterface []=[];
  users$ = new BehaviorSubject<UserInterface[]>([]);

  addUser(user:UserInterface):void{
    // this.users.push(user);
    this.users$.next([...this.users$.getValue(), user]);
  }
  removeUser(userId:string){
    this.users$.next(this.users$.getValue().filter((user) => user.id !== userId));
  }
  // getUsers():UserInterface[]{
  //   return this.utilService.pluck(this.users,'name');
  // }

}
import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service"
import { UserInterface } from "../types/user.interface";
import { UtilsService } from "./utils.service";

describe('UsersService',()=>{
  let usersService:UsersService;
  // let utilsService:UtilsService; - spyon

  // let utilsServiceMock = {
  //   pluck: jest.fn(),
  // } - mocking

  beforeEach( ()=>{
    TestBed.configureTestingModule({
      providers: [
        UsersService, 
        // UtilsService
        // {provide: UtilsService, useValue: utilsServiceMock} - mocking method

      ]
    });
    usersService =TestBed.inject(UsersService);
    // utilsService = TestBed.inject(UtilsService); -spyon Method
  });
  it('service should be created',()=>{
    expect(usersService).toBeTruthy();
  });

  describe('addUser',()=>{
    const user:UserInterface = {
      id:'1',
      name:'John Doe',
    }
    it('should add a user',()=>{
      usersService.addUser(user);
      expect(usersService.users$.getValue()).toEqual([user]);
    });
  });
  describe('removeUser',()=>{
    const user:UserInterface = {
      id:'1',
      name:'John Doe',
    }
    it('should remove a user',()=>{
      usersService.addUser(user);
      usersService.removeUser(user.id);
      expect(usersService.users$.getValue()).toEqual([]);
    });
  });

// mocking and spying 

  // describe('getUsers',()=>{
  //   it('should return an array of user names',()=>{
  //   jest.spyOn(utilsService, 'pluck');
  //   usersService.users = [
  //     {id:'1',name:'John Doe'},
  //   ];
  //   usersService.getUsers();
  //   expect(utilsService.pluck).toHaveBeenCalledWith(
  //     usersService.users, 'name'
  //   );
  //     // utilsServiceMock.pluck.mockReturnValue(['Abdel']);
  //     // expect(usersService.getUsers()).toEqual(['Abdel']);
  //   });
  // });
})
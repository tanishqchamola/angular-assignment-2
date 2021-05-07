import { Component, OnInit } from '@angular/core';
import { AllUsersService } from "../../services/all-users.service";
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  thead = ['Full Name', 'Gender', 'Email', 'Mobile', 'Category', 'Technologies'];
  base64: string;

  createUserForm = new FormGroup({
    fullName: new FormControl('',Validators.compose([Validators.minLength(2), Validators.maxLength(30),Validators.required, Validators.pattern('^[a-zA-Z ]*')])),
    gender: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), Validators.required])),
    mobile: new FormControl('',Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required, Validators.pattern('^[56789][0-9]{9}')])),
    category: new FormControl('',Validators.required),
    technologies: new FormArray([]),
    photo: new FormControl('')
  });

  constructor(private allUsersService: AllUsersService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.allUsersService.setUsers(this.createUserForm.value);
    let form = <HTMLFormElement>document.getElementById('createUser');
    form.reset();
  }

  changeTechnologies(e) {
    const formArray: FormArray = this.createUserForm.get('technologies') as FormArray;

    if (e.target.checked) {
      formArray.push(new FormControl(e.target.value));
    }
    else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == e.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  imgToBase64() {
    var input = <HTMLInputElement>document.getElementById('photo');

    if (input.files[0]) {
      let file = input.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        let b64 = reader.result;
        this.createUserForm.get('photo').setValue(b64 as string);
      };
      reader.readAsDataURL(file);
    }
  }
}

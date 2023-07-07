import { Component, Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) {}

  insertData() {
    const data = {
      name: 'John',
      age: 25,
      email: 'john@example.com'
    };

    this.db.object('path/to/data').set(data)
      .then(() => {
        console.log('Data inserted successfully!');
      })
      .catch((error: any) => {
        console.error('Error inserting data:', error);
      });
  }

  viewData() {
    this.db.object('path/to/data').valueChanges().subscribe((data: any) => {
      console.log(data);
    });
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ProfilePictureClickedEvent,
  ProfilePictureComponent,
} from './profile-picture/profile-picture.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePictureComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  profilePictureClicked(event: ProfilePictureClickedEvent): void {
    console.log('Profile picture clicked:', event);
  }
}

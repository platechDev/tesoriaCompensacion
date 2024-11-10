import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {sharedModules} from "../../../../../../shared/shared.module";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    ...sharedModules,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  menuItems = [
    { icon: 'manage_accounts', label: 'Cuenta', route: 'user/account'},
    { icon: 'palette', label: 'Apariencia', route: 'user/appearance' },
    { icon: 'tune', label: 'Preferencia', route: 'user/preference'}
  ];
}
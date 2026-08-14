import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton, MatIcon, MatIconButton, MatTooltip],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css'],
})
export class ClipboardComponent implements OnInit {
  value = 'We want peace, no more war';
  constructor() {}

  ngOnInit(): void {}
}

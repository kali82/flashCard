import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  translation: string = '';

  ngOnInit() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.translation = request.text;
    });
  }
}

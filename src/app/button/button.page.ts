// src/app/button/button.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBackButton
} from '@ionic/angular/standalone';
@Component({
    selector: 'app-button',
    templateUrl: './button.page.html',
    styleUrls: ['./button.page.scss'], // Pastikan ini menunjuk ke file SCSS di atas
    standalone: true,
    imports: [
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButton,
        IonButtons,
        IonBackButton,
        CommonModule,
        FormsModule
    ]
})
export class ButtonPage implements OnInit {
    clickCount: number = 0;
    constructor() { }
    ngOnInit() {
    }
    // Function untuk handle button click
    onButtonClick() {
        this.clickCount++;
        console.log('Button diklik! Total:', this.clickCount);
    }
}
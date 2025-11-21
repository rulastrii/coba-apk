// src/app/radio/radio.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonRadioGroup,
    IonRadio,
    IonCheckbox
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.page.html',
    styleUrls: ['./radio.page.scss'],
    standalone: true,
    imports: [
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonList,
        IonItem,
        IonRadioGroup,
        IonRadio,
        IonCheckbox,
        CommonModule,
        FormsModule
    ]
})
export class RadioPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
// src/app/input/input.page.ts

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
    IonInput,
    IonTextarea,
    IonButton
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss'],
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
        IonInput,
        IonTextarea,
        IonButton,
        CommonModule,
        FormsModule
    ]
})
export class InputPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
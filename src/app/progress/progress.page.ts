// src/app/progress/progress.page.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common'; // Import PercentPipe
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonProgressBar,
    IonItem,
    IonLabel
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.page.html',
    styleUrls: ['./progress.page.scss'],
    standalone: true,
    imports: [
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonProgressBar,
        IonItem,
        IonLabel,
        CommonModule,
        FormsModule
    ],
    providers: [PercentPipe] 
})
export class ProgressPage implements OnInit, OnDestroy {
    
    progressValue: number = 0;
    private intervalRef: any;

    constructor() { }

    ngOnInit() {
        this.startProgressSimulation();
    }

    ngOnDestroy() {
        if (this.intervalRef) {
            clearInterval(this.intervalRef);
        }
    }

    startProgressSimulation() {
        this.intervalRef = setInterval(() => {
            this.progressValue += 0.01; 
            if (this.progressValue >= 1) {
                this.progressValue = 0;
            }
        }, 50); 
    }
}
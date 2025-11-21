import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  // 1. Tambahkan variabel pesan
  pesanStatus: string = 'Aplikasi siap diuji!';
  
  constructor() {}

  // 2. Tambahkan fungsi untuk mengubah pesan
  ubahStatus() {
    this.pesanStatus = 'Status berhasil diubah, APK siap dibagikan!';
  }
}
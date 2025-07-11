import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Notes } from '../../core/services/notes/notes';
import { isPlatformBrowser } from '@angular/common';
import { INote } from '../../core/interfaces/notes.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly note = inject(Notes);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  notesList: INote[] = [];
  ngOnInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      this.getUserNotes();
    }
  }

  getUserNotes() {
    this.note.getUserNotes().subscribe({
      next: (res) => {
        console.log(res);
        this.notesList = res.notes;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

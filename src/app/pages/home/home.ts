import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Notes } from '../../core/services/notes/notes';
import { isPlatformBrowser } from '@angular/common';
import { INote } from '../../core/interfaces/notes.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly note = inject(Notes);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  notesList: INote[] = [];

  addToForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

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

  addNoteSubmit() {
    this.note.addNotes(this.addToForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.getUserNotes();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

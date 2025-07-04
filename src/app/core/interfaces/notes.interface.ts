export interface getNotesRoot {
  msg: string;
  notes: Note[];
}

export interface Note {
  _id: string;
  title: string;
  content: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

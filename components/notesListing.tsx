"use client"
import { getAllNotes } from '@/app/actions/database_Resquest';
import { useEffect, useState } from 'react';

interface NoteType {
  id: number;
  title: string;
};

export default async function NotesList() {

  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => { 
    async function loadData() {
    const data = await getAllNotes();
    setNotes(data);

    loadData();
  }}, [])
  
   
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {notes.map( (note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
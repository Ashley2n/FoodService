
import NotesList from "@/components/notesListing"


export default function NotesPage() {
  return (
    <div>
      <h1>This is not Part of the website, a test page</h1>
      <NotesList/>
    </div>
  )
}



// export default async function Notes() {
//   const supabase = await createClient();
//   const { data: cakes } = await supabase.from("notes").select();

  

//   return <pre>{JSON.stringify(cakes, null, 2)}</pre>
// }

// export async function getNotes(id: SelectNotes['id']): Promise<
//   Array<{
//     id: number;
//     title: string;
//   }>
// > {

//   return db.select().from(notes).where(eq(notes.id, id));
// }

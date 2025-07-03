export async function getAllNotes(req, res) {
    res.status(200).send("Here are your notes");
}

export async function getNoteById(req, res) {
    const noteId = req.params.id;
    res.status(200).json({ message: `Note with ID ${noteId} retrieved successfully` });
}

export async function createNote(req, res) {    
    const newNote = req.body;
    res.status(201).json({ message: "Note created successfully"});
}

export async function updateNote(req, res) {
    res.status(200).json({ message: `Note updated successfully`});
}

export async function deleteNote(req, res) {
    const noteId = req.params.id;
    res.status(200).json({ message: `Note with ID ${noteId} deleted successfully` });
}
import { GlobalUtils } from "@utils";

const properties = {
    notebook: {
        notes: "notes",
        owner: "owner",
        title: "title",
        id: "_id"
    },
    note: {
        accessLevel: "accessLevel",
        dateCreated: "creationDate",
        lastChanged: "lastChanged",
        text: "text",
        title: "title",
        id: "_id"
    }
};

const accessLevelOptions = [
    {
        name: "Public",
        value: "public"
    },
    {
        name: "Private",
        value: "private"
    }
];

const findNoteParent = function (noteId, backpack) {
    if (noteId && backpack && backpack.isFetched) {
        for (let notebook of backpack.notebooks) {
            for (let note of notebook.notes) {
                if (note._id === noteId) {
                    return notebook;
                }
            }
        }
    }
};

const findNoteParentId = function (noteId, backpack) {
    const notebook = findNoteParent(noteId, backpack);

    return GlobalUtils.getValue(notebook, properties.notebook.id);
};

const findNote = function (noteId, backpack) {
    if (noteId && backpack && backpack.isFetched) {
        for (let notebook of backpack.notebooks) {
            for (let note of notebook.notes) {
                if (note._id === noteId) {
                    return note;
                }
            }
        }
    }
};

const findNotebook = function(notebookId, backpack) {
	if (notebookId && backpack && backpack.isFetched) {
		for (let notebook of backpack.notebooks) {
			if (notebook._id === notebookId) {
                return notebook;
            }
        }
    }
};


const getNotebookSelectOptions = function (backpack) {
    const list = Array.isArray(backpack.notebooks) ? backpack.notebooks : [];

    return list.map(function (notebook) {
        return {
            name: GlobalUtils.getValue(notebook, properties.notebook.title),
            value: GlobalUtils.getValue(notebook, properties.notebook.id)
        };
    });
};

const notebookCount = function (backpack) {
    return backpack.notebooks.length;
};

const popNote = function (noteId, backpack) {
    let selectedNote = null;

    if (noteId && backpack) {
        const notebook = findNoteParent(noteId, backpack);
        
        let notes = GlobalUtils.getValue(notebook, properties.notebook.notes, []);

        notebook.notes = notes.filter((note) => {
            if (selectedNote === null && GlobalUtils.getValue(note, properties.note.id) === noteId) {
                selectedNote = note;

                return false;
            } else {
                return true;
            }
        });
    }

    return selectedNote;
};

export default {
    accessLevelOptions,
    findNote,
    findNotebook,
    findNoteParent,
    findNoteParentId,
    getNotebookSelectOptions,
    notebookCount,
    popNote,
    props: properties
};

import { GlobalUtils } from "@utils";

const DEFAULT_EDITOR_CONTENT = {
    blocks: []
};

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

const createParagraphBlock = function (text) {
    return {
        type: "paragraph",
        data: {
            text
        }
    };
};

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

const getContentDisplayData = (note) => {
    let content = GlobalUtils.getValue(note, "text", "");

    try {
        if (typeof content === "string") {
            content = JSON.parse(content);
        }

        if (!GlobalUtils.getValue(content, "blocks", false)) {
            content = JSON.stringify(content);
            throw new Error();
        }
    } catch {
        content = {
            blocks: [
                createParagraphBlock(content)
            ]
        };
    }

    return content;
};

export default {
    accessLevelOptions,
    createParagraphBlock,
    DEFAULT_EDITOR_CONTENT,
    findNote,
    findNotebook,
    findNoteParent,
    findNoteParentId,
    getContentDisplayData,
    getNotebookSelectOptions,
    notebookCount,
    popNote,
    props: properties
};

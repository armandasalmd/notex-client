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
                if (note._id === noteId) return note;
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

export default {
    findNoteParent,
    findNoteParentId,
    findNote,
    props: properties,
    accessLevelOptions,
    getNotebookSelectOptions
};

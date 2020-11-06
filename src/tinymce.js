// Import TinyMCE
import tinymce from "tinymce/tinymce";

// Default icons are required for TinyMCE 5.3 or above
import "tinymce/icons/default";

// A theme is also required
import "tinymce/themes/silver";

// Any plugins you want to use has to be imported
import "tinymce/plugins/paste";
import "tinymce/plugins/link";

// Initialize the app
tinymce.init({
    selector: "#tiny",
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
    ],
});

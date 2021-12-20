export default function EditorContentNotFound() {
    return [
        { c: "// not found", class: "comment" },
        { c: "" },
        { c: "ERROR: NotFoundError: This page does not exist!", class: 'error' },
    ]
}
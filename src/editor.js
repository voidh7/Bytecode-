require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.33.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Byte Code IDE</title>
</head>
<body>
    <h1>Hello, Byte Code IDE!</h1>
</body>
</html>`,
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true,
    });
});

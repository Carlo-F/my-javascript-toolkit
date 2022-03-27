let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;

let text = "Visit my blog at http://www.example.com/~david";

let match = text.match(url);
match[0] // "http://www.example.com/~david"
match.input // text
match.index // 17; occurence position
match.groups.protocol //"http"
match.groups.host //"www.example.com"
match.groups.path //"~david"

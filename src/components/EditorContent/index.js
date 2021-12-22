import { useState, useEffect } from "react";
import "./styles.css";
import { js } from "js-beautify";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default function EditorContent(props) {
  const maxLineCharLength = 80; // <- change based on editor width
  const indentSize = 2; // <- change based on editor width
  const [content, setContent] = useState(null);
  useEffect(() => {
    async function getContent() {
      const file = await fetch(`/editor-content/${props.content}.js`);
      const text = await file.text();

      const formattedCode = js(text, {
        wrap_line_length: maxLineCharLength,
        indent_size: indentSize,
        indent_char: "\u00A0",
        max_preserve_newlines: "5",
        preserve_newlines: true,
        keep_array_indentation: false,
        break_chained_methods: false,
        indent_scripts: "normal",
        brace_style: "collapse",
        space_before_conditional: true,
        unescape_strings: false,
        jslint_happy: false,
        end_with_newline: false,
        indent_inner_html: false,
        comma_first: false,
        e4x: false,
        indent_empty_lines: false,
      });

      const codeArr = formattedCode.split("\n");
      const codeWithLinks = codeArr.map((line) => {
        const r = RegExp(/\[([^\[\]]*)\]\((.*?)\)/, "g");
        const x = r.exec(line);
        let l;
        if (x) {
          let indentationString = "";
          for (var i = 0; i < line.length; i++) {
            if (line[i] === "\u00A0") {
              indentationString += "\u00A0";
            }
          }
          l = `$<a href="${x[2]}" target="_blank">${indentationString}<span class="hljs-string link">${x[1]}</span></a>,`;
        } else {
          l = line;
        }

        return l;
      });

      const highlightedCode = codeWithLinks
        .map((l) => {
          if (l.startsWith("$")) {
            return l.substring(1);
          }

          return hljs.highlight(l, {
            language: "javascript",
          }).value;
        })
        .join("\n");

      const numberedLines = highlightedCode
        .split("\n")
        .map((line) => `<span class="editor-line">${line}</span>`)
        .map((line) => `${line}`)
        .join("\n");

      setContent(numberedLines);
    }
    getContent();
  }, []);

  return (
    <pre>
      <code
        class="editorContent language-js"
        dangerouslySetInnerHTML={{ __html: content }}
      ></code>
    </pre>
  );
}

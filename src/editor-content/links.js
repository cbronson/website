export default function EditorContentLinks() {
    return [
        { c: '// links', class: 'comment' },
        { c: '' },
        { c: '<span class="export">export</span> <span class="const">const</span> links <span class="light-text">= [</span>' },
        { 
            c: '<span class="string">"</span>'
                + '<a class="link" href="mailto:connorbronson@gmail.com" target="_blank" rel="noreferrer">connorbronson@gmail.com</a>'
                + '<span class="string">"</span><span class="light-text">,</span>', 
            class: 'indent-1' 
        },
        { 
            c: '<span class="string">"</span>'
                + '<a class="link" href="https://www.linkedin.com/in/connor-bronson" target="_blank" rel="noreferrer">LinkedIn</a>'
                + '<span class="string">"</span><span class="light-text">,</span>', 
            class: 'indent-1' 
        },
        { 
            c: '<span class="string">"</span>'
                + '<a class="link" href="https://github.com/cbronson" target="_blank" rel="noreferrer">GitHub</a>'
                + '<span class="string">"</span><span class="light-text">,</span>', 
            class: 'indent-1' 
        },
        { 
            c: '<span class="string">"</span>'
                + '<a class="link" href="https://twitter.com/connorbronson" target="_blank" rel="noreferrer">Twitter</a>'
                + '<span class="string">"</span>', 
            class: 'indent-1' 
        },
        { 
            c: '<span class="string">"</span>'
                + '<a class="link" href="https://stackoverflow.com/users/1698273/cbronson" target="_blank" rel="noreferrer">StackOverflow</a>'
                + '<span class="string">"</span>', 
            class: 'indent-1' 
        },
        { c: '<span class="light-text">]</span>' },
    ]
}
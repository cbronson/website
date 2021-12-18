export default function EditorContentResume() {
  return [
    { c: "// resume", class: "comment" },
    { c: "" },
    {
      c:
        '<span class="const">const</span>' +
        ' download_link <span class="light-text">=</span> ' +
        '<span class="string">"</span>' +
        '<a href="" class="link" target="_blank">Download My Resume</a>' +
        '<span class="string">"</span>',
    },
    { c: "" },
    { c: '<span class="export">export</span> <span class="const">const</span> resume <span class="light-text">= [</span>' },
    { c: '{', class: "light-text indent-1"},
    { c: 'title: <span class="string">"Software Engineer"</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'company: <span class="string">"Greenlight IoT, Inc."</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'dates: <span class="string">"March 2020 - Current"</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'responsibilities: <span class="light-text">[</span>', class: "indent-2"},
    { c: '<span class="string">"Work within a team to design and develop the company\'s SaaS platform"</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Modern Angular frontend development using industry accepted best practices."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Backend microservice development using NodeJS, NestJS, and Fastify."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"MongoDB database design, deployment, and maintenance."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Service deployment and orchestration via AWS solutions including EC2 and ECS."</span>', class: "indent-3"},
    { c: '<span class="light-text">],</span>', class: "indent-2"},
    { c: '},', class: "light-text indent-1"},
    { c: '{', class: "light-text indent-1"},
    { c: 'title: <span class="string">"CTO / COO"</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'company: <span class="string">"My Broken Phone LLC"</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'dates: <span class="string">"October 2013 - March 2020"</span><span class="light-text">,</span>', class: "indent-2"},
    { c: 'responsibilities: <span class="light-text">[</span>', class: "indent-2"},
    { c: '<span class="string">"Create, review, and implement business and marketing strategies."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Handle accounting and budgeting."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"IT and website maintenance and development."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Personnel management including hiring, onboarding, and training."</span>', class: "indent-3"},
    { c: '<span class="light-text">],</span>', class: "indent-2"},
    { c: 'achievements: <span class="light-text">[</span>', class: "indent-2"},
    { c: '<span class="string">"Redesigned and rebuilt the company website from the ground up."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Built custom integrations between company CRM, website, and Slack"</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Established company wide policies and procedures."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Restructured company management to facilitate operational consistency."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Used market research campaigns to identify a valuable target market."</span><span class="light-text">,</span>', class: "indent-3"},
    { c: '<span class="string">"Established new company brand positioning to better focus on target market."</span>', class: "indent-3"},
    { c: '<span class="light-text">],</span>', class: "indent-2"},
    { c: '},', class: "light-text indent-1"},
    { c: '<span class="light-text">]</span>' },
  ];
}

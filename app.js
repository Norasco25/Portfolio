'use strict';
const projects = [
  {
    "id": "billshock",
    "category": "Computer science",
    "title": "Bill Shock Desk",
    "deck": "A small web service that helps households respond to utility shutoff or past-due notices, with a staff console to review and send help requests.",
    "type": "Web service prototype",
    "role": "Software project",
    "focus": "Node.js / SQLite / JavaScript",
    "sections": [
      [
        "How it works",
        "A household pastes a notice, confirms the information, describes who lives in the home, and receives a plan with concrete steps, phone numbers, and deadlines. Staff review flagged checks, approve the case, and send a letter and phone script."
      ],
      [
        "Built to be readable",
        "The codebase uses Node’s built-in HTTP server, SQLite, crypto, and test runner, with no dependencies or build step. Each file has one job. It requires Node 22.13 or newer and includes 38 tests, as documented in the project README."
      ],
      [
        "Human review and traceability",
        "Consent is required before approval, and sending requires an approved case. Editing a draft removes approval. Plans and drafts reference library entries; expired entries are hidden until rechecked, and flagged steps require staff review. STOP blocks further texts, and an append-only audit log records staff actions."
      ],
      [
        "Privacy",
        "Notices are encrypted with AES-256-GCM and deleted when a case closes. Unfinished drafts expire after 24 hours, and personal data is scrubbed after 30 days while anonymous results remain."
      ],
      [
        "Development setup",
        "Run npm start to open the household flow at http://127.0.0.1:3000/ and the staff console at /staff/. Run npm test for the test suite. Optional Claude photo reading and Twilio messaging require configuration; those integrations were tested with fake network calls, not live services."
      ],
      [
        "Example data — not verified",
        "Example Power & Light, its phone numbers, links, and rules are fictional. Every example entry is labeled EXAMPLE DATA - not verified. Replace them with information checked against the utility’s published rules before anyone relies on the service. Real use also requires review of the consent wording, Spanish translations, security configuration, and live integrations."
      ]
    ]
  },
  {
    "id": "dicks",
    "category": "Finance & business",
    "title": "DICK’S Sporting Goods",
    "deck": "Company research developing a long equity investment idea for the Point72 Academy Case Competition.",
    "type": "Investment case",
    "role": "Company research",
    "focus": "Long equity idea",
    "sections": [
      [
        "The project",
        "An investment research project examining DICK’S Sporting Goods as a long equity idea with a three-to-five-year horizon."
      ],
      [
        "The scope",
        "The competition called for a company with a market capitalization of at least $1 billion, supported by a financial model and pitch deck."
      ]
    ]
  },
  {
    "id": "grounds",
    "category": "Finance & business",
    "title": "Campus Grounds",
    "deck": "A financial review and decision framework for a coffee shop considering a cold-brew expansion.",
    "type": "Academic business case",
    "role": "Financial review & presentation",
    "focus": "Excel / PowerPoint",
    "sections": [
      [
        "The question",
        "Should a coffee shop expand its cold-brew offering? The case asks for a recommendation grounded in the shop’s first-quarter performance."
      ],
      [
        "The work",
        "I prepared a Q1 financial review in Excel and an executive presentation in PowerPoint. The work connected the financial picture to a practical decision about a proposed cold-brew pilot."
      ],
      [
        "The recommendation",
        "The recommendation was a conditional go for the pilot, subject to a cash check and a sales forecast. A profitable quarter is a useful starting point; the expansion decision also needs a view of available cash and likely demand."
      ]
    ]
  },
  {
    "id": "spending",
    "category": "Computer science",
    "title": "Spending Visualizer",
    "deck": "A tool that collects spending data and turns it into visualizations so patterns are easier to understand.",
    "type": "Software project",
    "role": "Programming",
    "focus": "Data collection & visualization",
    "sections": [
      [
        "The project",
        "Spending Visualizer turns spending records into visual views of where money goes. The goal is to make patterns easier to notice and explore."
      ],
      [
        "The work",
        "The code collects and visualizes spending data, connecting personal finance with practical software development."
      ]
    ]
  },
  {
    "id": "mood",
    "category": "Computer science",
    "title": "Music and Movie Recommender",
    "deck": "Music and movie recommendations based on a person’s mood.",
    "type": "Recommendation project",
    "role": "Recommendation design",
    "focus": "Music & movies",
    "sections": [
      [
        "The idea",
        "Use a person’s mood as the starting point for music and movie recommendations."
      ],
      [
        "The purpose",
        "Explore how entertainment recommendations can support everyday emotional wellbeing. This is not a medical tool, and no clinical benefits are claimed."
      ]
    ]
  },
  {
    "id": "mindguard",
    "category": "Computer science",
    "title": "MindGuard",
    "deck": "An early-stage product concept for making personal wellbeing check-ins easier to fit into everyday life.",
    "type": "Early-stage concept",
    "role": "Building from scratch",
    "focus": "Product & social entrepreneurship",
    "sections": [
      [
        "The starting point",
        "My interest in social entrepreneurship led me to think about how technology might help people pay attention to their wellbeing earlier. MindGuard grew from that question."
      ],
      [
        "The concept",
        "The idea explores short personal check-ins alongside everyday phone or wearable information, with the aim of helping someone reflect on patterns and find supportive resources. I’m building the project from scratch."
      ],
      [
        "The open questions",
        "I’m still working through what would make the experience useful, how people would discover it, and how to support it over time. Those questions are part of the project, not solved features."
      ]
    ]
  },
  {
    "id": "budget",
    "category": "Computer science",
    "title": "Personal Budget / Finance Tracker",
    "deck": "An individual project I’m building from scratch for personal budgeting and finance tracking.",
    "type": "In progress",
    "role": "Individual developer",
    "focus": "Personal finance",
    "sections": [
      [
        "The goal",
        "Build a tool for personal budgeting and keeping track of finances."
      ],
      [
        "Current stage",
        "The project is in progress. Specific features will be documented as they are implemented."
      ]
    ]
  }
];
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#main-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('is-open',!open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
const filters=[...document.querySelectorAll('.filter')];
let activeFilter='all';
filters.forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  filters.forEach(filter=>{const selected=filter===button;filter.classList.toggle('active',selected);filter.setAttribute('aria-pressed',String(selected));});
  let count=0;
  document.querySelectorAll('.project').forEach(project=>{const visible=activeFilter==='all'||project.dataset.category===activeFilter;project.hidden=!visible;if(visible)count++;});
  const counter=document.querySelector('#project-count');if(counter)counter.textContent=count+' project'+(count===1?'':'s');
}));
const dialog=document.querySelector('#project-dialog');
let currentProject=0;
let openingButton=null;
function getVisibleProjects(){return projects.filter(p=>activeFilter==='all'||(activeFilter==='finance'?p.category==='Finance & business':p.category==='Computer science'));}
function renderProject(id){
  const project=projects.find(p=>p.id===id);
  currentProject=projects.indexOf(project);
  const visible=getVisibleProjects();
  const index=visible.findIndex(p=>p.id===id);
  document.querySelector('#detail-category').textContent=project.category+' / Project '+String(currentProject+1).padStart(2,'0');
  document.querySelector('#detail-content').innerHTML=`<h2 id="detail-title">${project.title}</h2><p class="detail-deck">${project.deck}</p><div class="detail-facts"><div><span class="eyebrow">Context</span><span>${project.type}</span></div><div><span class="eyebrow">Work</span><span>${project.role}</span></div><div><span class="eyebrow">Focus</span><span>${project.focus}</span></div></div>${project.sections.map(([title,text])=>`<section class="detail-section"><h3>${title}</h3><p>${text}</p></section>`).join('')}`;
  document.querySelector('#detail-position').textContent=String(index+1).padStart(2,'0')+' / '+String(visible.length).padStart(2,'0');
  dialog.scrollTop=0;
}
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{openingButton=button;activeFilter=button.closest('.project').dataset.category;renderProject(button.dataset.open);document.body.classList.add('dialog-open');dialog.showModal();}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(openingButton)openingButton.focus({preventScroll:true});});
dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const controls=[...dialog.querySelectorAll('button,a[href],[tabindex="0"]')].filter(el=>!el.disabled);const first=controls[0],last=controls[controls.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
function moveProject(direction){const visible=getVisibleProjects();const index=visible.findIndex(p=>p.id===projects[currentProject].id);renderProject(visible[(index+direction+visible.length)%visible.length].id);document.querySelector('.close-dialog').focus({preventScroll:true});}
document.querySelector('#next-project').addEventListener('click',()=>moveProject(1));
document.querySelector('#previous-project').addEventListener('click',()=>moveProject(-1));
let copyTimer;
async function copyEmail(){try{await navigator.clipboard.writeText('norascop40@gmail.com');return true;}catch{const field=document.createElement('textarea');field.value='norascop40@gmail.com';field.setAttribute('readonly','');field.style.cssText='position:fixed;left:-9999px;top:0;opacity:0';document.body.append(field);field.select();let copied=false;try{copied=document.execCommand('copy');}finally{field.remove();document.querySelector('#copy-email').focus({preventScroll:true});}return copied;}}
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');clearTimeout(copyTimer);status.textContent=await copyEmail()?'Email copied.':'Select the email above to copy it.';copyTimer=setTimeout(()=>{status.textContent='';},4500);});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navigation.querySelectorAll('a').forEach(a=>{const current=a.hash==='#'+entry.target.id;a.classList.toggle('current',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-10% 0px -65% 0px',threshold:0});['home','cs-work','finance-work','contact'].forEach(id=>observer.observe(document.getElementById(id)));}

window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});

/* Aside menu list for 'My docs' page */
const navigationAsideListForMyDocsPage = [  // Renamed variable
  { href: "my_projects.html", text: "My projects" },
  {href:"my_notes.html", text: "My notes"},
  {href:"my_posts.html", text: "My posts"},
  // { href: "content/pages/qa_docs.html", text: "QA docs" },
  // { href: "test_automation_docs.html", text: "Test automation docs" },
  // { href: "content/pages/dev_docs.html", text: "DEV docs" },
  { href: "https://kristinek.github.io/site/", text: "Examples for UI testing" },
  { href: "my_books.html", text: "My books" },
  // { href: "/storage/nn_faq.html", text: "Neural networks-FAQ" },
  { href: "reference_resources.html", text: "Reference resources" },
];

function buildNavigationAsideList() {
  const asideNavigationListElement = document.getElementById("aside__navigation__list"); // Updated ID
  const listElement = document.createElement("ul");

  navigationAsideListForMyDocsPage.forEach(navigationItem => {
    const listItem = document.createElement("p");
    const link = document.createElement("a");
    link.href = navigationItem.href;
    link.textContent = navigationItem.text;
    listItem.appendChild(link);
    listElement.appendChild(listItem);
  });

  asideNavigationListElement.appendChild(listElement);
}

/* Aside menu list for 'My docs' page */


buildNavigationAsideList();
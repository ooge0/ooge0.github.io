// Data mapping (replace with your actual paths)
const dataMap = {
  "my_posts.html": "../data/my_posts.json",
  "my_notes.html": "../data/my_notes.json"
};

function generateContent() {
  // Get the current page's filename
  const currentPage = window.location.pathname.split("/").pop();

  // Check if the current page is mapped to a data file
  if (!dataMap.hasOwnProperty(currentPage)) {
    console.warn("No data mapping found for the current page:", currentPage);
    return;
  }

  const dataFile = dataMap[currentPage];

  fetch(dataFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(fetchedData => {
      const contentList = generateContentList(fetchedData);
      const contentDetails = generateContentDetails(fetchedData);

      updateContentList(contentList);
      updateContentDetails(contentDetails);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function generateContentList(data) {
  let listContent = "";

  data.forEach(category => {
    const categoryId = `category_${category.top_category.replace(/\s+/g, '_')}`;
    listContent += `<li><h3><a href="#${categoryId}" >${category.top_category}</a></h3>`;
    listContent += `<ol>`;

      category.top_category_items.forEach(item => {
        // Generate unique ID for each item of category using index and category name
        const index = category.top_category_items.indexOf(item); // Get current item's index
        const topCategoryItemsId = `category_item_${category.top_category.replace(/\s+/g, '_')}-${index}`;
      
      const title = item.top_category_item_title || ""; // Skip missing title
        listContent += `<li><a href="#${topCategoryItemsId}">${title}</a></li>`;
    });

  
    listContent += `</ol></li>`;
  });

  return listContent;
}

function generateContentDetails(data) {
  let detailsContent = "";

  data.forEach(category => {
    const categoryId = `category_${category.top_category.replace(/\s+/g, '_')}`;
    detailsContent += `<li><h3 id="${categoryId}">${category.top_category}</h3>`;
    detailsContent += `<ol>`;

      category.top_category_items.forEach(item => {
        const index = category.top_category_items.indexOf(item); // Get current item's index
        const topCategoryItemsId = `category_item_${category.top_category.replace(/\s+/g, '_')}-${index}`;

        detailsContent += `<li><h4 id="${topCategoryItemsId}">${item.top_category_item_title || ""}</h4></li>`;
        detailsContent += `<a href="${item.top_category_item_url}" target="_blank">${item.top_category_item_url.slice(0, 30)}${item.top_category_item_url.length > 30 ? "..." : ""}</a>`;

      const details = item.top_category_item_details[0] || {}; // Get first details or empty object

      detailsContent += `<ul>`;
        detailsContent += getDetailElement("Item published at", details.item_published_at);
        detailsContent += getDetailElement("YouTube", details.youTube, true);
        detailsContent += getDetailElement("Published (on YouTube)", details.video_posted_on_YouTube);
        detailsContent += getDetailElement("Author", details.author); 
        detailsContent += getDetailElement("Author site", details.author_site,true); 
        detailsContent += getDetailElement("YouTube channel", details.youTube_channel, true);
        detailsContent += getDetailElement("GitHub project link", details.gitHub_project, true);
        detailsContent += getDetailElement("Programminng languages", details.programming_languages);
        detailsContent += getDetailElement("Description", details.description);
      detailsContent += `</ul>`;
    });

    detailsContent += `</ol></li>`;
  });

  return detailsContent;
}

function updateContentList(contentList) {
  const listElement = document.querySelector(".main__content__list ol");
  if (listElement) {
    listElement.innerHTML = contentList; // Update the list content
  } else {
    console.warn("Target element for content list not found.");
  }
}

function updateContentDetails(contentDetails) {
  const detailsElement = document.querySelector(".main__content__body ol");
  if (detailsElement) {
    detailsElement.innerHTML = contentDetails; // Update the details content
  } else {
    console.warn("Target element for content details not found.");
  }
}

// Helper function to create detail elements with conditional rendering
function getDetailElement(label, value, isLink = false) {
  if (!value) return "";
  return isLink ? `<li>${label}: <a href="${value}" target="_blank">${value}</a></li>` : `<li>${label}: ${value}</li>`;
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
  generateContent();
});

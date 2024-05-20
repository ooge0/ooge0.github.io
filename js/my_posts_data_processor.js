function generateContent(data, targetElementSelector) {
    const contentList = document.querySelector(targetElementSelector);

    if (!contentList) {
        console.error("Target element not found:", targetElementSelector);
        return;
    }

    data.forEach(platformGroup => {
        const platformListItem = document.createElement("li"); // Create list item for the platform
        const platformHeader = document.createElement("h3");
        platformHeader.textContent = platformGroup.name + " posts and articles";
        platformListItem.appendChild(platformHeader);

        const platformSubList = document.createElement("ol"); // Create sub-list for posts
        platformListItem.appendChild(platformSubList);

        platformGroup.platform_posts.forEach(post => {
            if (post.title) { // Check if title exists
                const postListItem = document.createElement("li"); // Create list item for the post

                const postLink = document.createElement("a");
                const formattedTitle = post.title.replace(/\s+/g, "_"); // Replace spaces with underscores

                // Handle cases where the formatted title is too long (> 40 characters)
                const shortTitle = formattedTitle.slice(0, 40) + (formattedTitle.length > 40 ? "..." : "");
                // postLink.textContent = "#" + shortTitle;
                postLink.textContent = formattedTitle;
                // postLink.href = "#" + formattedTitle; // Set href using formatted title
                postLink.href =  post.url; // Set href using formatted title

                postListItem.appendChild(postLink);
                platformSubList.appendChild(postListItem);
            }
            else {
                console.warn("Post object missing title property:", post); // Log a warning
            }

        });

        contentList.appendChild(platformListItem);
    });
}

// Fetch data and generate content
myData = "../data/my_posts.json";
fetch(myData)
    .then(response => response.json())
    .then(data => generateContent(data, ".main__content__list ol")) // Replace with your actual selector
    .catch(error => {
        console.error("Error fetching data:", error);
    });

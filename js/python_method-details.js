const methodContainer = document.getElementById('python_method-container');

async function fetchData() {
    try {
        const response = await fetch('../data/python_tutorial_data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        const data = await response.json();
        renderMethod(data);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

fetchData();

function renderMethod(data) {
    // Method setion components
    const methodData = data.method[0].method_item;

    const methodTitle = document.createElement('h2');
    const methodName = document.createElement('h3');
    const methodDescription = document.createElement('p');
    const methodCodeSnippet = document.createElement('pre');
    const methodCodeSnippetOutputPlaceholderText = document.createElement('p');
    const methodCodeOutput = document.createElement('pre');
    const methodNoteDescription = document.createElement('p');
    
    // Example section components
    const methodExampleTitle = document.createElement('h3');
    const methodCodeSnippetPlaceholderText = document.createElement('p');
    const methodExampleName = document.createElement('h3');
    const methodExampleDescription = document.createElement('p');
    const methodExampleCodeSnippetPlaceholderText = document.createElement('p');
    const methodExampleCodeSnippet = document.createElement('pre');
    const methodExampleCodeOutputPlaceholderText = document.createElement('p');
    const methodExampleCodeSnippetOutput = document.createElement('pre');
    const methodExampleNoteDescription = document.createElement('p');
    
    // Content of 'Method' section
    methodTitle.textContent = 'Method';
    methodName.textContent = methodData[0].method_name;
    methodDescription.textContent = methodData[1].method_description;
    methodCodeSnippetPlaceholderText.textContent = 'Code:';
    methodCodeSnippet.innerHTML = `<code class="language-python">${escapeHTML(methodData[2].method_code_snippet)}</code>`;
    methodCodeSnippetOutputPlaceholderText.textContent = 'Output:';
    methodCodeOutput.innerHTML = `<code class="language-python">${escapeHTML(methodData[3].method_code_output)}</code>`;
    methodNoteDescription.textContent = methodData[4].method_note_description;
    
    // Content of 'Example' section
    const example = methodData[5].method_examples[0].method_example;
    methodExampleTitle.textContent = 'Examples';
    methodExampleName.textContent = example[0].method_example_name;
    methodExampleDescription.textContent = example[1].method_example_description;
    methodExampleCodeSnippet.innerHTML = `<code class="language-python">${escapeHTML(example[2].method_example_code_snippet)}</code>`;
    methodExampleCodeSnippetPlaceholderText.textContent = 'Code:';
    methodExampleCodeSnippetOutput.innerHTML = `<code class="language-python">${escapeHTML(example[3].method_example_code_snippet_output)}</code>`;
    methodExampleCodeOutputPlaceholderText.textContent = 'Output:';
    methodExampleNoteDescription.textContent = example[4].method_example_note_description;
    
    // Elements of 'Method' section
    methodContainer.appendChild(methodTitle);
    methodContainer.appendChild(methodName);
    methodContainer.appendChild(methodDescription);
    methodContainer.appendChild(methodCodeSnippetPlaceholderText);
    methodContainer.appendChild(methodCodeSnippet);
    methodContainer.appendChild(methodCodeSnippetOutputPlaceholderText);
    methodContainer.appendChild(methodCodeOutput);
    methodContainer.appendChild(methodNoteDescription);
    // Elements of 'Example' section
    methodContainer.appendChild(methodExampleTitle);
    methodContainer.appendChild(methodExampleName);
    methodContainer.appendChild(methodExampleDescription);
    methodContainer.appendChild(methodExampleCodeSnippetPlaceholderText);
    methodContainer.appendChild(methodExampleCodeSnippet);
    methodContainer.appendChild(methodExampleCodeOutputPlaceholderText);
    methodContainer.appendChild(methodExampleCodeSnippetOutput);
    methodContainer.appendChild(methodExampleNoteDescription);


  // Append all elements to the container
  methodContainer.appendChild(methodExampleNoteDescription);

  // After appending everything, trigger highlighting
  Prism.highlightAll();
}

function escapeHTML(html) {
    return html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&#039;');
}

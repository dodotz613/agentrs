// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Create animated background decoration
// Update the createBackgroundDecoration function
function createBackgroundDecoration() {
    const decoration = document.querySelector('.background-decoration');
    if (!decoration) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.top = '0';
    svg.style.left = '0';

    const paths = [
        {
            fill: 'rgba(230, 244, 241, 0.5)',
            d: 'M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z'
        },
        {
            fill: 'rgba(213, 232, 226, 0.5)',
            d: 'M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z'
        }
    ];

    paths.forEach((pathData, index) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', pathData.fill);
        path.setAttribute('d', pathData.d);
        
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'd');
        animate.setAttribute('dur', `${8 + index * 2}s`);
        animate.setAttribute('repeatCount', 'indefinite');
        animate.setAttribute('values', `
            ${pathData.d};
            ${pathData.d.replace(/Q\d+,\d+/, 'Q25,' + (40 + index * 10))};
            ${pathData.d}
        `);
        
        path.appendChild(animate);
        svg.appendChild(path);
    });

    decoration.appendChild(svg);
}

// Initialize background decoration
document.addEventListener('DOMContentLoaded', createBackgroundDecoration);

// Stagger fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add smooth scroll behavior for internal links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.getElementById("demo-button").addEventListener("click", function() {
    const demoOutput = document.getElementById("demo-output");
    
    // Clear previous demo output before displaying new output
    demoOutput.textContent = '';

    // Array of random demo responses
    const demoResponses = [
        "GPT-4o: Here's a joke: Why don't skeletons fight each other? They don't have the guts!",
        "GPT-4o: Here's a joke: What do you call fake spaghetti? An impasta!",
        "GPT-4o: Here's a joke: Why don’t programmers like nature? It has too many bugs.",
        "GPT-4o: Here's a joke: How do you comfort a JavaScript bug? You console it!",
        "GPT-4o: Here's a joke: Why was the computer cold? Because it left its Windows open!",
        "GPT-4o: Here's a joke: Why do Java developers wear glasses? Because they can’t C#!"
    ];

    // Select a random sentence from the array
    const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];

    // Display the random demo response
    demoOutput.textContent = randomResponse;
});

// Highlight Rust code with hljs
document.addEventListener("DOMContentLoaded", function() {
    hljs.highlightAll();
});
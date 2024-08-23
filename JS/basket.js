
    document.addEventListener('DOMContentLoaded', function() {
        const ratingSelect = document.getElementById('rating');
        const feedbackLabel = document.createElement('p');
        feedbackLabel.style.color = '#2e8b57';
        feedbackLabel.style.fontWeight = 'bold';
        ratingSelect.parentNode.appendChild(feedbackLabel);

        ratingSelect.addEventListener('change', function() {
            const ratingValue = ratingSelect.options[ratingSelect.selectedIndex].text;
            feedbackLabel.textContent = 'Ви обрали: ' + ratingValue;
        });
    });

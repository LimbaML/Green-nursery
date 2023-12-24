 // Function to add feedback
    function addFeedback() {
        const plantName = document.getElementById('plantName').value;
        const feedbackText = document.getElementById('feedback').value;
        const reviewerName = document.getElementById('reviewername').value;

        if (plantName.trim() === '' || feedbackText.trim() === '' || reviewerName.trim() === '' || selectedRating === 0) {
            alert('Please fill in all fields and select a rating.');
            return;
        }

        // Create a review object
        const review = {
            plantName,
            feedbackText,
            reviewerName,
            rating: selectedRating,
        };

        // Get existing reviews from local storage
        const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Add the new review to the existing ones
        existingReviews.push(review);

        // Save the reviews back to local storage
        localStorage.setItem('reviews', JSON.stringify(existingReviews));

        // Clear the form fields and reset rating
        document.getElementById('plantName').value = '';
        document.getElementById('feedback').value = '';
        document.getElementById('reviewername').value = '';
        selectedRating = 0;
        updateStarRating();

        // Refresh the reviews on the page
        displayReviews();
    }

    // Function to display reviews on the page
    function displayReviews() {
        const reviewsContainer = document.getElementById('reviews-container');

        // Get reviews from local storage
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Clear existing content
        reviewsContainer.innerHTML = '';

        // Display each review
        reviews.forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.innerHTML = `<h3>${review.plantName}</h3><p>${review.feedbackText}<br><span class="rating">${getStars(review.rating)}</span></p><h5>-${review.reviewerName}</h5>`;

            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerText = 'Delete';
            deleteBtn.onclick = () => deleteReview(index);

            reviewDiv.appendChild(deleteBtn);

            reviewsContainer.appendChild(reviewDiv);
        });
    }

    // Function to get star ratings

    // Function to delete a review
    function deleteReview(index) {
        const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        existingReviews.splice(index, 1);
        localStorage.setItem('reviews', JSON.stringify(existingReviews));
        displayReviews();
    }

    // Display initial reviews on page load
    displayReviews();

    function getStars(rating) {
        const stars = '⭐⭐⭐⭐⭐';
        return stars.substring(0, rating);
    }

    let selectedRating = 0;

    function rate(rating) {
        selectedRating = rating;
        updateStarRating();
    }

    function updateStarRating() {
        const starContainer = document.getElementById('star-container');
        const stars = starContainer.getElementsByClassName('star');

        for (let i = 0; i < stars.length; i++) {
            if (i < selectedRating) {
                stars[i].classList.add('active');
            } else {
                stars[i].classList.remove('active');
            }
        }

        document.getElementById('selected-rating').innerText = selectedRating;
    }
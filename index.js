// Add a smooth scrolling effect to the navigation links
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
  
  // Add a filter to the portfolio items
  $('.filter-btn').on('click', function() {
    var filter = $(this).attr('data-filter');
    if (filter === 'all') {
      $('.portfolio-item').show(400);
    } else {
      $('.portfolio-item').not('.' + filter).hide(200);
      $('.portfolio-item').filter('.' + filter).show(400);
    }
  });
  
  // Add a lightbox to the portfolio images
  $('.portfolio-item a').on('click', function(event) {
    event.preventDefault();
    var image = $(this).find('img').attr('src');
    var title = $(this).find('h3').text();
    var description = $(this).find('.description').html();
    $('#lightbox img').attr('src', image);
    $('#lightbox h3').text(title);
    $('#lightbox .description').html(description);
    $('#lightbox').fadeIn(400);
  });
  
  $('#lightbox').on('click', function() {
    $(this).fadeOut(400);
  });
// Handle form submission
$('form').on('submit', function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    // Send form data to server using AJAX
    $.ajax({
      type: 'POST',
      url: 'submit-form.php', // Replace with the appropriate URL of your backend code that will process the form submission
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(data) {
        // Display success message and clear the form
        $('#contact').html('<h2>Thanks for contacting me!</h2>');
      },
      error: function(xhr, status, error) {
        // Display error message
        $('#contact').html('<h2>Oops! Something went wrong.</h2>');
      }
    });
  });
    
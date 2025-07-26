
            // Map
        
            $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.849144822222!2d28.348811443136736!3d-25.709418299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955f79dce83f6f%3A0x3321b562a4b58e79!2sSt%20Francis%20Anglican%20Church!5e0!3m2!1sen!2sza!4v1750436045217!5m2!1sen!2sza" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');

            // T&C Modal
            $('#tcPrivacyLink').on('click', function() {
                $('#tcPrivacyModal').css('display', 'block');
            });
            $('.close-modal').on('click', function() {
                $('#tcPrivacyModal').css('display', 'none');
            });
            $(window).on('click', function(event) {
                if ($(event.target).is('#tcPrivacyModal')) {
                    $('#tcPrivacyModal').css('display', 'none');
                }
            });
  $(document).ready(function() {
            // Smooth scrolling
            $('a[href^="#"]').on('click', function(event) {
                var target = $($.attr(this, 'href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 700);
                }
                });
            });

            // Active link highlighting
            $(window).on('scroll', function() {
                const scrollPosition = $(window).scrollTop();
                $('section').each(function() {
                    const target = $(this).attr('id');
                    const offset = $(this).offset().top - 100;
                    const height = $(this).outerHeight();
                    if(scrollPosition >= offset && scrollPosition < offset + height) {
                        $('.nav-link').removeClass('active');
                        $(`.nav-link[href="#${target}"]`).addClass('active');
                    }
                });
            });

            // Section header animation
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            document.querySelectorAll('.section-header').forEach(header => observer.observe(header));

            // Accordion
            $('.accordion-header').on('click', function() {
                const content = $(this).next('.accordion-content');
                const icon = $(this).find('i');
                $('.accordion-content').not(content).removeClass('active');
                $('.accordion-header i').not(icon).removeClass('transform rotate-180');
                content.toggleClass('active');
                icon.toggleClass('transform rotate-180');
            });

            // Mobile menu
            $('#mobileMenuBtn').on('click', function() {
                $('#mobileNav').addClass('open');
                $('body').css('overflow', 'hidden');
            });
            $('#closeMenuBtn').on('click', function() {
                $('#mobileNav').removeClass('open');
                $('body').css('overflow', 'auto');
            });

            // Lightbox
            lightbox.option({
                'resizeDuration': 300,
                'wrapAround': true,
                'albumLabel': 'Image %1 of %2',
                'fadeDuration': 300
            });

            // Ministries image lightbox
            $('.ministry-img').on('click', function(e) {
                e.preventDefault();
                $(this).wrap('<a data-lightbox="ministry-gallery" href="'+$(this).attr('src')+'"></a>');
                $(this).parent().get(0).click();
                $(this).unwrap();
            });

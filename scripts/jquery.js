function main() {
    
    //note: hasClass is a thing!    
    
    //navbar
    $(document).ready(function(){    
        $(window).resize(function() {
            if ($(window).width() > 1020) {
                $('#hamburger_list').slideUp();
            }
        });
    });
    
    $(document).ready(function(){
        $('#hamburger').on('click', function(){
            $('#hamburger_list').slideToggle();
        });
    });
    
    //home page tabs
    $(document).ready(function(){
        $('#bci_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.bci_carousel').fadeIn(1000);
            $('.bci_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('#powered_arm_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.powered_arm_carousel').fadeIn(1000);
            $('.powered_arm_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('#enable_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.enable_carousel').fadeIn(1000);
            $('.enable_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('#atlas_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.atlas_carousel').fadeIn(1000);
            $('.atlas_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('#beowulf_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.beowulf_carousel').fadeIn(1000);
            $('.beowulf_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $('#pillow_carousel').on('click', function() {
            $('.current_tab').fadeOut();
            $('.current_tab').removeClass('current_tab');
            $('.pillow_carousel').fadeIn(1000);
            $('.pillow_carousel').addClass('current_tab');
            $('.carousel_tab').removeClass('clicked');
            $(this).addClass('clicked');
        });
    }); 

    //carousel responsiveness 
    $(document).ready(function(){
        if($(window).width() <= 970) {
            $('.dropdown_list').removeClass('collapsed');
            $('.dropdown_list').addClass('expanded');
        }
    });
    
    $(document).ready(function(){
        $(window).resize(function() {
            if ($(window).width() <= 970) {
                $('.dropdown_list').removeClass('collapsed');
                $('.dropdown_list').addClass('expanded');
            }
            else {
                $('.dropdown_list').removeClass('expanded');
                $('.dropdown_list').addClass('collapsed');
            }
        });
    });

    
    $(document).ready(function(){
        $(document).on('change','.dropdown_list',function() {
            if(document.getElementById("bci_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.bci_carousel').fadeIn(1000);
                $('.bci_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
            else if(document.getElementById("powered_arm_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.powered_arm_carousel').fadeIn(1000);
                $('.powered_arm_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
            else if(document.getElementById("enable_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.enable_carousel').fadeIn(1000);
                $('.enable_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
            else if(document.getElementById("atlas_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.atlas_carousel').fadeIn(1000);
                $('.atlas_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
            else if(document.getElementById("beowulf_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.beowulf_carousel').fadeIn(1000);
                $('.beowulf_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
            else if(document.getElementById("pillow_drop_carousel").selected) {
                $('.current_tab').fadeOut();
                $('.current_tab').removeClass('current_tab');
                $('.pillow_carousel').fadeIn(1000);
                $('.pillow_carousel').addClass('current_tab');
                $('.carousel_tab').removeClass('clicked');
                $(this).addClass('clicked');
            }
        });
    });
    
    /*
    function isCollapsed() {
    return $('.dropdown_list').hasClass('collapsed');
    }
    
    $(document).ready(function(){
        if($(window).width() <= 970 && isCollapsed()){
           $('.down_arrow').addClass('expanded');
            $('.down_arrow').removeClass('collapsed');
        }
    });
    
    $(document).ready(function(){
        $(window).resize(function() {
            if ($(window).width() <= 970 && isCollapsed()) {
                $('.down_arrow').addClass('expanded');
                $('.down_arrow').removeClass('collapsed');
            }
        });
    });
    
    $(document).ready(function(){ 
        if($(window).width() <= 970) {
            $('.current_selection').removeClass('clicked');
            $('.carousel_tab').on('click', function(){
                $('.dropdown_list').slideToggle();
                $('.dropdown_list').toggleClass('collapsed');
                $('.up_arrow').toggleClass('collapsed');
                $('.down_arrow').toggleClass('expanded');
             });
        }
        else {
            $('.down_arrow').removeClass('expanded');
            $('.down_arrow').addClass('collapsed');
            $('.up_arrow').removeClass('expanded');
            $('.up_arrow').addClass('collapsed');
            $('.dropdown_list').slideUp();
            $('.dropdown_list').addClass('collapsed');
        }
    });
    
    $(document).ready(function(){
        $(window).resize(function() {
            if ($(window).width() > 970) {
                $('.dropdown_list').slideUp();
                $('.dropdown_list').addClass('collapsed');
            }
        });
    });
    
    $(document).ready(function(){
        $(window).resize(function() {
            if ($(window).width() <= 970) {
                $('.current_selection').removeClass('clicked');
                $('.carousel_tab').on('click', function(){
                    $('.up_arrow').toggleClass('collapsed');
                    $('.down_arrow').toggleClass('expanded');
                    //$('.dropdown_list').slideToggle();
                });
            } 
            else {
                $('.down_arrow').removeClass('expanded');
                $('.down_arrow').addClass('collapsed');
                $('.up_arrow').removeClass('expanded');
                $('.up_arrow').addClass('collapsed');
                $('.dropdown_list').slideUp();
                $('.dropdown_list').addClass('collapsed');
            }
        });
        
    });
    */
    
    //accordion functionality
    $(document).ready(function() {	
        $('.toggle_one').on('click', function() {
			$('.toggle_one').toggleClass('expanded');
            $('.toggle_one').toggleClass('collapsed');
		});
        
        $('.toggle_one').on('click', function() {
            $('.project_one_content').slideToggle();
        });
        
        $('.toggle_two').on('click', function(){
            $('.toggle_two').toggleClass('expanded');
            $('.toggle_two').toggleClass('collapsed');
        });
        
        $('.toggle_two').on('click', function() {
            $('.project_two_content').slideToggle();
        });
	});
    
    //team page carousels
    $(document).ready(function(){
        $('.carousel').slick({
            adaptiveHeight:true,
            autoplay:true
        });
    });
    
};

$(document).ready(main);
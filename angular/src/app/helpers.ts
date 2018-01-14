import * as $ from "jquery";

declare var jQuery:any;
declare var $:any;

export class Helpers {
	static setLoading(loading) {
		let body = $('body');
		if (loading) {
			$('.preloader-backdrop').fadeIn(200);
		} else {
			$('.preloader-backdrop').fadeOut(200);
		}
	}

	static bodyClass(Class) {
		$('body').attr('class', Class);
	}

	static initLayout() {
	    // SIDEBAR ACTIVATE METISMENU
		$(".metismenu").metisMenu();

		// SIDEBAR TOGGLE ACTION
	    $('.js-sidebar-toggler').click(function() {
	        $('body').toggleClass('sidebar-mini');
	    });

	}

	static initPage() {

	    // Activate Tooltips
	    $('[data-toggle="tooltip"]').tooltip();

	    // Activate Popovers
	    $('[data-toggle="popover"]').popover();

	    // Activate slimscroll
	    $('.scroller').each(function(){
	        $(this).slimScroll({
	            height: $(this).attr('data-height'),
	            color: $(this).attr('data-color'),
	            railOpacity: '0.9',
	        });
	    });

	    $('.slimScrollBar').hide();

	    
		// PANEL ACTIONS
	    // ======================

	    $('.ibox-collapse').click(function(){
	    	var ibox = $(this).closest('div.ibox');
	        ibox.toggleClass('collapsed-mode').children('.ibox-body').slideToggle(200);
	    });
	    $('.ibox-remove').click(function(){
	    	$(this).closest('div.ibox').remove();
	    });
	    $('.fullscreen-link').click(function(){
	        if($('body').hasClass('fullscreen-mode')) {
	            $('body').removeClass('fullscreen-mode');
	            $(this).closest('div.ibox').removeClass('ibox-fullscreen');
	            $(window).off('keydown',toggleFullscreen);
	        } else {
	            $('body').addClass('fullscreen-mode');
	            $(this).closest('div.ibox').addClass('ibox-fullscreen');
	            $(window).on('keydown', toggleFullscreen);
	        }
	    });
	    function toggleFullscreen(e) {
	        // pressing the ESC key - KEY_ESC = 27 
	        if(e.which == 27) {
	            $('body').removeClass('fullscreen-mode');
	            $('.ibox-fullscreen').removeClass('ibox-fullscreen');
	            $(window).off('keydown',toggleFullscreen);
	        }
	    }

	}
}
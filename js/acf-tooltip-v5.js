(function($) {

	var tooltiptext;
	var label;
	var tooltipimage;

	var test_field = 'test_field';
	var test_field_2 = 'test_field_2';
	var two_column = 'two_column_layout';

	acf.add_action('ready append', function( $el ) {
		$('.clones .table-layout').addClass('is_clone');

		$('.acf-postbox .acf-label, form.acf-form .acf-label').each(function() {
			acf_label_tooltips($(this));
		});

		$('.acf-postbox .acf-input, form.acf-form .acf-input').each(function() {
			acf_input_tooltips($(this));
		});

		$('.acf-postbox').not('.clones').find('.acf-repeater.-table, .table-layout').not('.is_clone').find('thead > tr > .acf-th').each(function() {
			acf_repeater_tooltips($(this));
		});

		$('.is_clone').removeClass('is_clone');

		acf_remove_clones();

		acf_tooltip();
		
	});

	function acf_remove_clones() {
		$('.acf-clone[data-layout="block"] td.acf-fields').each(function() {		
			acf_remove_class_and_span($(this));
		});

		$('.acf-clone[data-layout="row"] td.acf-label').each(function() {			
			acf_remove_class_and_span($(this));
		});

		$('.acf-clone[data-layout="table"] th.acf-th').each(function() {			
			// acf_remove_th_span($(this));
		});

		$('.acf-repeater .acf-clone .acf-label').each(function() {			
			acf_remove_class_and_span($(this));
		});
	};

	function acf_remove_class_and_span(that) {
		label = that.find('label');
		label.removeClass('has_tooltip')
			.find('span').remove();
	};

	function acf_remove_th_span(that) {
		that.find('span').remove();
	};


	function acf_tooltip() {
		$('.tooltip').each(function() {

			if ( $(this).hasClass('repeater') ) {
				tooltiptext = $(this).parent().find('.description').html();
			} else {
				tooltiptext = $(this).parent().parent().parent().find('.description').html();
			}
			if( $(this).parents('div.acf-field').attr('data-name') == test_field){
				tooltipimage = '<img src="/wp-content/plugins/3Media-ACF-tooltip-image/images/a-blue-box.png" style="max-height: 50px; max-width:100px;">';
			}else if($(this).parents('div.acf-field').attr('data-name') == test_field_2){
				tooltipimage = '<img src="/wp-content/plugins/3Media-ACF-tooltip-image/images/a-blue-box.png" style="height: 250px; width:500px;">';
			}
			else if($(this).parents('div.acf-field').attr('data-name') == two_column){
				tooltipimage = '<img src="/wp-content/plugins/3Media-ACF-tooltip-image/images/red-square.png" style="max-height: 150px; max-width:300px;">';
			}
			else{
				tooltipimage = 'No description set.';
			}
			$(this).qtip({
				style: {
					classes: 'qtip-acf',
					def: false
				},
				position: {
					my: 'center left',  // Position my top left...
					at: 'right center', // at the bottom right of...
				},
				content: {
					text: tooltipimage
				}
			});
		});
	}

	function acf_repeater_tooltips(repeaterfield) {
		desciption = repeaterfield.find('p.description');
		tooltiptext = desciption.html();
		if( !$.trim(tooltiptext) == '') {
			if ( !desciption.hasClass('has_tooltip') ) {
				repeaterfield.append('<span class="dashicons dashicons-editor-help repeater tooltip"></span>');
				desciption.addClass('has_tooltip');
			}
		}
	};

	function acf_label_tooltips(labelfield) {
		tooltiptext = labelfield.find('p.description').html();
		label = labelfield.find('label');
		if( !$.trim(tooltiptext) == '') {
			if ( !label.hasClass('has_tooltip') ) {
				label.append('<span class="dashicons dashicons-editor-help tooltip"></span>');
				label.addClass('has_tooltip');
			}
		}
	};

	function acf_input_tooltips(labelfield) {
		tooltiptext = labelfield.find('p.description').html();
		label = labelfield.parent().find('label');
		if( !$.trim(tooltiptext) == '') {
			if ( !label.hasClass('has_tooltip') ) {
				label.append('<span class="dashicons dashicons-editor-help tooltip"></span>');
				label.addClass('has_tooltip');
			}
		}
	};
	
})(jQuery);

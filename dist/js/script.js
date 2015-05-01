  jQuery(function($) {
  	var options = {
  		//$menu: $('header .menu'),
  		directionThreshold: 100,
  		slideSpeed: 500
  	};
  	$('#panelSlapContainer').panelSnap(options);

  	$('#progress').tocProgress({
  		storyElem: '.sectionContent',
  		topText: '',
  		offsetElem : 'panelSlapContainer',
      headlineSelector: 'h2.section-title'
  	});


});

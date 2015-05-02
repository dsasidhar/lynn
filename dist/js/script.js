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


  FWDRLUtils.onReady(function(){
    new FWDRL({ 
          //main settings
          mainFolderPath:"dist",
          skinPath:"minimal_skin_dark",
          rightClickContextMenu:"default",
          buttonsAlignment:"in",
          useDeepLinking:"yes",
          useAsModal:"no",
          slideShowAutoPlay:"no",
          addKeyboardSupport:"yes",
          showCloseButton:"yes",
          showFacebookButton:"yes",
          showZoomButton:"yes",
          showSlideShowButton:"yes",
          showSlideShowAnimation:"yes",
          showNextAndPrevButtons:"yes",
          showNextAndPrevButtonsOnMobile:"yes",
          buttonsHideDelay:3,
          slideShowDelay:4,
          defaultItemWidth:800,
          defaultItemHeight:500,
          itemOffsetHeight:50,
          spaceBetweenButtons:1,
          buttonsOffsetIn:2,
          buttonsOffsetOut:5,
          itemBorderSize:4,
          itemBorderRadius:0,
          backgroundOpacity:.8,
          itemBoxShadow:"none",
          itemBackgroundColor:"#333333",
          itemBorderColor:"#FFFFFF",
          backgroundColor:"#000000",
          //thumbnails settings
          showThumbnails:"yes",
          showThumbnailsHideOrShowButton:"yes",
          showThumbnailsByDefault:"yes",
          showThumbnailsOverlay:"yes",
          showThumbnailsSmallIcon:"yes",
          thumbnailsHoverEffect:"scale",
          thumbnailsImageHeight:80,
          thumbnailsBorderSize:4,
          thumbnailsBorderRadius:0,
          spaceBetweenThumbnailsAndItem:0,
          thumbnailsOffsetBottom:0,
          spaceBetweenThumbnails:2,
          thumbnailsOverlayOpacity:.6,
          thumbnailsOverlayColor:"#FFFFFF",
          thumbnailsBorderNormalColor:"#FFFFFF",
          thumbnailsBorderSelectedColor:"#FFFFFF",
          //description settings
          showDescriptionButton:"yes",
          showDescriptionByDefault:"yes",
          descriptionWindowAnimationType:"motion",
          descriptionWindowPosition:"bottom",
          descriptionWindowBackgroundColor:"#FFFFFF",
          descriptionWindowBackgroundOpacity:.95,
          //video & audio players settings
          useVideo:"yes",
          useAudio:"yes",
          videoShowFullScreenButton:"yes",
          addVideoKeyboardSupport:"yes",
          nextVideoOrAudioAutoPlay:"yes",
          videoAutoPlay:"no",
          videoLoop:"no",
          audioAutoPlay:"no",
          audioLoop:"no",
          videoControllerHideDelay:3,
          videoControllerHeight:41,
          audioControllerHeight:44,
          startSpaceBetweenButtons:7,
          vdSpaceBetweenButtons:9,
          mainScrubberOffestTop:14,
          scrubbersOffsetWidth:1,
          audioScrubbersOffestTotalWidth:4,
          timeOffsetLeftWidth:5,
          timeOffsetRightWidth:3,
          volumeScrubberWidth:80,
          volumeScrubberOffsetRightWidth:0,
          videoControllerBackgroundColor:"#FFFFFF",
          videoPosterBackgroundColor:"#0099FF",
          audioControllerBackgroundColor:"#FFFFFF",
          timeColor:"#000000"
        });
});
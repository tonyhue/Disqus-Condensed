$( document ).ready(function() {

	// var url      = window.location.href; // grab url of page	
	// if on channel feed page, ie /channel/slug/, /channel/slug/latest
	// add banned users link under Admin Links submenu
	// grab the url of the page to extract the channel's slug
	// insert into Admin panel Banned users page
	// https://channel-channelchat.disqus.com/admin/settings/access/#!/?l=blacklist

	// https://twitter.com/spikebrehm/status/596068358497247232
	setTimeout(function(){
		/**********************************************
		Add shortcut to Search Disqus in settings menu
		**********************************************/
		$( "<li><a href='https://search-disqus-net.herokuapp.com/'>Search (Experimental)</a></li>" ).prependTo(".dropdown-settings" );
		// $('#discussion-form-subscribe-checkbox').attr('checked', false); // uncheck subscribe to email updates to discussion
		$('[data-role="explore"]').attr('href', '/home/explore/discussions/');
	}, 2000);

	
	/*****************************************
	Add Condenser theme to <style> in <head>
	******************************************/

	var css = '.card-content__media{height:100%}.card__reason{font-size:14px}.card-wrap{margin-bottom:5px}.card__reason.align.align--middle{padding-bottom:10px;border-bottom:1px solid #eff3fa}.homepage-feed .card__reason.link-inner-gray-dark.align.align--middle{background:#fff299}a[data-link-name="external_thread"]{display:none}.card__additional{display:none}.homepage-feed li.dropdown,.feed-content li.dropdown{display:none}.card-content__summary{display:none}.dropdown-settings li a:hover{background-color:#2e9fff;color:#fff}li a[href^=\x27/follow/facebook/\x27]{display:none}a[href^=\x27/home/discuss/channel-\x27]{background:#cce9ff}.card-content__topics{display:none}.card-notif-create .card__reason{background:#fff299}.card-wrap.card--notification.card-notif-follow{display:none}.-notification .card-content__summary{display:block}.card__reason.-explore.align.align--middle{border-bottom:none;padding-top:10px}.nav--discussion li[data-action="switch-tab"].active span.button__text{border-bottom:1px solid #2e9fff}div[data-role="related-stories"] header.module-header.-plain{border:none;padding-bottom:0;margin-bottom:10px}div[data-role="related-stories"] .module-recent__item{display:block;transition:all 250ms ease-in-out;padding:0}div[data-role="related-stories"] .module-body{border:1px solid #e0e3e9;padding:0}div[data-role="related-stories"] .module-recent__item:hover{background-color:#cce9ff}div[data-role="related-stories"] .module-recent__item:first-child{padding-top:0}div[data-role="related-stories"] .module-recent__item{padding:0;margin:0}div[data-role="related-stories"] .module-recent__media{padding-top:10px}div[data-role="related-stories"] .media-body .spacing-bottom-narrow{padding:10px 15px}div[data-role="related-stories"] .media-body .text-small{padding:0 15px 10px}@media only screen and (min-width: 768px){.has-image .card-content__body{width:calc(100% - 0px)}.img-cards{width:80px;height:80px}.card__content.-default.has-image{padding-bottom:15px}.card__content.-default.has-image + .card__footer.text-small{position:absolute;bottom:0}.is-recommended .card__reason.link-inner-gray-dark{position:absolute;right:0;top:5px;border-bottom:none}.card-content__body .discussion-title{font-size:20px}.has-image .card-content__body{margin-bottom:50px}.card--channel .card__header{margin-bottom:10px}.-notification .card-content__body{margin-bottom:0}.explore-discussion__wrapper .card__content.-default.has-image{padding-bottom:10px}.explore-discussion__wrapper .has-image + .card__footer.text-gray-dark.text-semibold{position:absolute;bottom:0}.explore-discussion__wrapper .card--channel:hover{background:#cce9ff}.explore-discussion__wrapper .card-wrap.-link{margin-bottom:0}}',
    
    head  = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

	style.type = 'text/css';
	style.id   = 'disqus-condensed';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

	
});
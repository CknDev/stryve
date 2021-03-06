const $ = require("jquery");
import * as helpers from './helpers'

let resizeElements  = function() {
	let screenH = helpers.getWindowHeight(),
		screenW = helpers.getWindowWidth(),
		serversListWidth = 80,
		channelsListWidth = 240,
		channelsListHeader = 55,
		channelUsersList = 240,
		channelHeader = 52,
		userInputSpacing = 80,
		userImputContainer = 80,
		userSettingsPanel = 55

	// console.log(screenW + ' - ' + screenH)

	$('#messages-container').css('height', screenH - userImputContainer - channelHeader);
	$('#messages-container').css('width', screenW - channelsListWidth - serversListWidth);
	$('#messages-container.channels').css('width', screenW - channelsListWidth - serversListWidth - channelUsersList);

	$('#contact_message').css('width', screenW - channelsListWidth - serversListWidth - userInputSpacing);
	$('#channel-users').css('height', screenH - channelHeader);

	$('#channels-list').css('height', (screenH - channelHeader - channelsListHeader - userSettingsPanel));
	$('#contacts-list').css('height', (screenH - channelHeader - userSettingsPanel));

	$('#server-list-container').css('height', screenH);
	$('#server-channels-container').css('height', screenH);
	$('#channel-messages-container').css('height', screenH);
	$('#channel-messages-container').css('width', (screenW - channelsListWidth - serversListWidth));

	// hide user list
	if(screenW < 1000) {
		$('#channel-users').hide();

		$('#channel-messages').css('width', screenW - channelsListWidth - serversListWidth);
		$('#user-input').css('width', screenW - channelsListWidth - serversListWidth);
		$('#channel_message').css('width', screenW - channelsListWidth - serversListWidth - userInputSpacing);
		$('#messages-container.channels').css('width', '100%');

	} else {
		$('#channel-users').show();

		$('#channel-messages').css('width', screenW - channelsListWidth - serversListWidth - channelUsersList);
		$('#user-input').css('width', screenW - channelsListWidth - serversListWidth - channelUsersList);
		$('#user-input.contacts').css('width', screenW - channelsListWidth - serversListWidth);
		$('#channel_message').css('width', screenW - channelsListWidth - serversListWidth - channelUsersList - userInputSpacing);


	}
}

// resizeElements();

// resize elements on resize event
window.onresize = function(event) {
  	resizeElements();
};

// hide server menu when clicking away
// window.onclick = function(event) {
// 	if(event.target.parentElement.parentElement.id != 'channels-top'
// 		 && event.target.parentElement.id != 'channels-top'
// 		 && !isEmptyObject(app.chat_server)
// 		 && app.serverMenuIsOpen)
		
// 		// hide the server menu
// 		app.toggleServerMenu();
// }
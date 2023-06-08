const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* internal method to render the rooms list */
const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Rooms';
    if (!(responseBody instanceof Array)) {
        message = 'API loockup error';
        responseBody = [];
    }
    else if (!responseBody.length) {
        message = 'No rooms exist in our database!';
    }
    res.render('rooms',
        {
            title: pageTitle,
            rooms: responseBody,
            message
        }
    );
}

/* GET rooms view */
const roomsList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> roomsController.roomsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    );
};

module.exports = {
    roomsList
};
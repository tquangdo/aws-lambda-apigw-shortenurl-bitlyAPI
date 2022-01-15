const BitlyClient = require('bitly')
const config = require('./config.json')
const bitly = new BitlyClient.BitlyClient(config.BITLY_TOKEN)

exports.handler = (event, context, callback) => {
    bitly.shorten(event.url)
        .then(par_short_url => {
            callback(null, par_short_url)
        })
        .catch(par_err => {
            callback(par_err)
        })
}
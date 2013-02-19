var Url = require('url')

function mask(url) {

  var parts = Url.parse(url)
  var auth = parts.auth
  if (!auth) { return url }

  auth = auth.split(':')[0]
  parts.auth = auth

  return Url.format(parts)
}

module.exports = mask
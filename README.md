# maskurl
hide user password in a url for safe console and log output

## installation

    $ npm install maskurl

## usage

    var url = 'http://foo:dinosaurs@reptar.com/'

    maskurl(url)
    // => http://foo@reptar.com/

## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md.
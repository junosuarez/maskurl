var chai = require('chai')
chai.should()

var maskurl = require('../index')

describe('maskurl', function () {
  it('masks the password component of a url', function () {
    var url= 'http://foo:dinosaurs@reptar.com/'

    maskurl(url).should.equal('http://foo@reptar.com/')
  })

  it('handles urls without credentials without choking', function () {
    var url = 'http://zombo.com'

    maskurl(url).should.equal(url)
  })
})
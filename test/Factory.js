var chai = require('chai');
var expect = require('chai').expect;
var Image = require('../image/Image');

describe('Image Factory', function () {
  'use strict';

  it('default provider is random', function () {
    expect(Image.provider).to.equal('random');
  });

  it('returns a random provider', function () {
    var availableProviders = Object.keys(Image.providers);

    expect(availableProviders).to.contain(Image.getProvider());
  });

  it('returns the correct provider when set', function () {
    var provider = 'DummyImage';

    Image.setProvider(provider);

    expect(Image.getProvider()).to.equal(provider);
  })
});

describe('Image Providers', function () {
  'use strict';

  var size = '400x400';

  it('returns Lorem Pixel URL', function () {
    Image.setProvider('LoremPixel');

    expect(Image.getImageUrl(size))
      .to.equal('http://lorempixel.com/400/400/');
  });

  it('returns PlaceholdIt URL', function () {
    Image.setProvider('PlaceholdIt');

    expect(Image.getImageUrl(size))
      .to.equal('http://placeholdit.imgix.net/~text?txtsize=40&txt=Spaceholder&w=400&h=400');
  });

  it('returns PlaceImg URL', function () {
    Image.setProvider('PlaceImg');

    expect(Image.getImageUrl(size))
      .to.equal('http://placeimg.com/400/400/any');
  });

  it('returns DummyImage URL', function () {
    Image.setProvider('DummyImage');

    expect(Image.getImageUrl(size))
      .to.equal('https://dummyimage.com/400x400/000/fff');
  });

  it('returns LoremPicsum URL', function () {
    Image.setProvider('LoremPicsum');

    expect(Image.getImageUrl(size))
      .to.include('https://picsum.photos/400/400');
  });

  it('returns FakeImg URL', function () {
    Image.setProvider('FakeImg');

    expect(Image.getImageUrl(size))
      .to.equal('https://fakeimg.pl/400x400/384f66/ecf0f1/?text=Spaceholder&font=lobster');
  });
});
module.exports = (function() {
  const fs = require('fs');
  const path = require('path');
  const photo = fs.readFileSync(path.join(__dirname, 'resouces/photo-sample.b64'));
  const initialData = {
    date: 'n/a',
    name: 'n/a',
    nameKana: 'n/a',
    photo: photo.toString(),
    sex: 'n/a',
    birth: 'n/a',
    age: 'n/a',
    zipcode: 'n/a',
    address: 'n/a',
    addressKana: 'n/a',
    tel: 'n/a',
    mail: 'n/a',
    contact: 'n/a',
    contactKana: 'n/a',
    conTel: 'n/a',
    conZip: 'n/a',
    itemsA1: [],
    itemsA2: [],
    itemsB: [],
    motivate: 'n/a',
    sp: 'n/a',
    station: 'n/a',
    dependent: 'n/a',
    spouse: 'n/a',
    support: 'n/a',
    desire: 'n/a'
  };
  function resumaker(data = initialData) {
    const pug = require('pug');
    return new Promise((done, fail) => {
      const filePath = path.join(__dirname, 'resouces/index.pug');
      const opt = {};
      try {
        const fn = pug.compileFile(filePath, opt);
        const html = fn(data);
        done(html);
      } catch (e) {
        fail(e);
      }
    });
  }
  function compile(htmlStr, outPath = 'tmp') {
    const npmRun = require('npm-run');
    return new Promise((done, fail) => {
      const htmlPath = path.join(___dirname, 'tmp/resume.html');
      const pdfPath = path.join(outPath, 'resume.pdf');
      fs.writeFile(htmlPath, htmlStr, (err) => {
        if (err) {
          fail(err);
        } else {
          const cmd = 'electron-pdf ' + htmlPath + ' ' + pdfPath;
          npmRun.exec(cmd, {}, (err) => {
            if (err) { fail(err); }
            else { done(true); }
          });
        }
      });
    });
  }
  return {
    make: resumaker,
    dataTmpl: initialData,
    convert: compile,
  };
})();
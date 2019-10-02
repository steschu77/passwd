var templates = ['CvccvCvcvl', 'CvccvCvclv', 'CvcCvcvclv', 'CvcCvccvlv'];

function generatePasswords(templates, number) {
  var chars = {}
  chars['l'] = 'abcdefghijklmnoprstuvwx';
  chars['U'] = chars['l'].toUpperCase();
  chars['v'] = 'aeiou';
  chars['V'] = chars['v'].toUpperCase();
  chars['c'] = 'bcdfghjklmnprstvwx';
  chars['C'] = chars['c'].toUpperCase();
  chars['9'] = '0123456789';
  chars['#'] = '!@#$%^&*_-+=()[]{}';
  chars['a'] = chars['l'] + chars['9'];
  chars['A'] = chars['a'].toUpperCase();

  var i, c, possible;

  var passwords = [];
  for (i = 0; i < number; i++) {
    template = templates[Math.floor(Math.random() * templates.length)];
    password = '';
    for (c = 0; c < template.length; c++) {
      possible = chars[template.charAt(c)];
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    passwords.push(password);
  }

  return passwords;
}

function doPasswords() {
  passwords = generatePasswords(templates, 10);

  passwords.forEach(password => {
    console.log(password);
  });
}

doPasswords();

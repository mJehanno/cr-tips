module.exports = {
  name: 'cr-tips',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cr-tips',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

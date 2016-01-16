/**
 * Created by tx-0020 on 16/1/14.
 */
var oss_require = Meteor.npmRequire('aliyun-sdk');
Oss = new oss_require.OSS({
    accessKeyId: "D1S2QxM7PO8PvIsL",
    secretAccessKey: "G468sFBempQ1VZg1Oeh0KP0xHj7qpZ",
    endpoint: 'http://oss-cn-beijing.aliyuncs.com',
    apiVersion: '2013-10-15'
});

//endpoint     http://oss-cn-beijing-internal.aliyuncs.com阿里云             http://oss-cn-beijing.aliyuncs.com本地测试
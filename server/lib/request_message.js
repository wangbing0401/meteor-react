/**
 * Created by tx-0020 on 15/12/5.
 */
get_message_from_request = function(request) {
    var syncLoad = Meteor.wrapAsync(load);
    var buffer = syncLoad(request);
    if (buffer) {
        var xml = buffer.toString('utf-8');
        console.log('xml 解析成功');
        //console.log(xml);
        if (!xml) {
            var emptyErr = new Error('body is empty');
            emptyErr.name = 'Wechat';
            return next(emptyErr);
        }
        //xml转json
        var json = xml2js.parseStringSync(xml);

        //对消息进行处理
        var message = formatMessage(json.xml);
        return message;
    }
    return '';

    //将data二进制进行转化成真是数据
    function load(stream, callback) {
        var buffers = [];
        stream.on('data', function (trunk) {
            buffers.push(trunk);
        });
        stream.on('end', function () {
            callback(null, Buffer.concat(buffers));
        });
        stream.once('error', callback);
    }

    function formatMessage(result) {
        var message = {};
        if (typeof result === 'object') {
            for (var key in result) {
                if (!(result[key] instanceof Array) || result[key].length === 0) {
                    continue;
                }
                if (result[key].length === 1) {
                    var val = result[key][0];
                    if (typeof val === 'object') {
                        message[key] = formatMessage(val);
                    } else {
                        message[key] = (val || '').trim();
                    }
                } else {
                    message[key] = [];
                    result[key].forEach(function (item) {
                        message[key].push(formatMessage(item));
                    });
                }
            }
        }
        return message;
    }
}
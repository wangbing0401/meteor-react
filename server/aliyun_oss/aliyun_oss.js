/**
 * Created by tx-0020 on 16/1/9.
 */
var avatarStoreLarge = new FS.Store.OSS('avatarsLarge', {
    region: 'oss-cn-beijing',
    internal: true,
    bucket: 'wb-images',
    accessKeyId: 'D1S2QxM7PO8PvIsL',
    secretAccessKey: 'G468sFBempQ1VZg1Oeh0KP0xHj7qpZ',
    transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).resize('250', '250').stream().pipe(writeStream)
    }
});

var avatarStoreSmall = new FS.Store.OSS('avatarsSmall', {
    region: 'oss-cn-beijing',
    internal: true,
    bucket: 'wb-images',
    accessKeyId: 'D1S2QxM7PO8PvIsL',
    secretAccessKey: 'G468sFBempQ1VZg1Oeh0KP0xHj7qpZ',
    beforeWrite: function(fileObj) {
        fileObj.size(20, {store: 'avatarStoreSmall', save: false});
    },
    transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).resize('20', '20').stream().pipe(writeStream)
    }
});


Avatars = new FS.Collection('avatars', {
    stores: [avatarStoreSmall, avatarStoreLarge],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

Avatars.allow({
    'insert': function(){
        return true;
    }
});
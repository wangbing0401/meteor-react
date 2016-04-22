/**
 * Created by tx-0020 on 16/1/18.
 */
//Meteor.users.extendSchema = new SimpleSchema({
//
//});
//
if(Meteor.isServer){
    Meteor.publish('get_user_name', function(user_id){
        var result = Meteor.users.find({_id: user_id});
        console.log(result);
        return result;
    });
}
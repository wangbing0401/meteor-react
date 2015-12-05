var adminRoutes = FlowRouter.group({
    //prefix: '/admin',
    name: 'admin',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.user()){
            redirect('login');
        }
    }]
});
FlowRouter.route("/", {
    name: 'home',
    action: function() {
        ReactLayout.render(App, {
            content: <Task />
        });
    }
});
FlowRouter.route("/register", {
    name: 'register',
    action:function(){
        ReactLayout.render(App, {
            content: <Register />
        });
    }
});
FlowRouter.route("/login", {
    name: 'login',
    action: function(){
        ReactLayout.render(App, {
            content: <Login />
        });
    }
});

adminRoutes.route("/list", {
    name: 'list',
    action: function(){
        ReactLayout.render(App, {
            content: <List />
        });
    }
})
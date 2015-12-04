var adminRoutes = FlowRouter.group({
    //prefix: '/admin',
    name: 'admin',
    triggersEnter: [function(context, redirect) {
        console.log('running group triggers');
    }]
});

adminRoutes.route("/", {
    name: 'home',
    action: function() {
        ReactLayout.render(App, {
            content: <Task />
        });
    }
});
adminRoutes.route("/register", {
    name: 'register',
    action:function(){
        ReactLayout.render(App, {
            content: <Register />
        });
    }
});
adminRoutes.route("/login", {
    action: function(){
        ReactLayout.render(App, {
            content: <Login />
        });
    }
});
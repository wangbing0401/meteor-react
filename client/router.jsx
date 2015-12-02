FlowRouter.route("/", {
    action: function() {
        ReactLayout.render(App, {
            content: <Task />
        });
    }
});

FlowRouter.route("/login", {
    action: function(){
        ReactLayout.render(App, {
            content: <Login />
        });
    }
});
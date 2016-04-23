var adminRoutes = FlowRouter.group({
    //prefix: '/admin',
    name: 'admin',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.userId()){
            redirect('login');
        }
    }]
});
var pcadminRoutes = FlowRouter.group({
    name:'pcadmin',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.userId()){
            redirect('home');
        }
    }]
});
FlowRouter.route("/", {
    name: 'home',
    action: function() {
        ReactLayout.render(PC, {
            nav: <PcNav username={Meteor.user()?Meteor.user().username:''} />,
            content: <PcIndex />
        });
    }
});
FlowRouter.route('/pc_login', {
    name: 'pc_login',
    action: function(){
        ReactLayout.render(PC, {
            nav:<PcNav />,
            content: <PcLogin />
        });
    }
});
FlowRouter.route('/pc_register', {
    name: 'pc_register',
    action: function(){
        ReactLayout.render(PC, {
            nav: <PcNav />,
            content: <PcRegister />
        });
    }
});
pcadminRoutes.route("/gold_price", {
    name: 'gold_price',
    action: function(){
        ReactLayout.render(PC, {
            nav: <PcNav username={Meteor.user()?Meteor.user().username:''} />,
            content: <PcGoldPrice />
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
            top: <ArticleTabs />,
            content: <List />,
            tabs: <Tabs count="文章,活动,发帖,我" active="文章" />
        });
    }
});
adminRoutes.route('/article_detail', {
    name: 'article_detail',
    action: function(params, queryParams){
        ReactLayout.render(App, {
            content: <ArticleDetail articleId={queryParams.articleId} />
        });
    }
}),
adminRoutes.route("/activity", {
    name: 'activity',
    action: function(){
        ReactLayout.render(App, {
            content: <Activity />,
            tabs: <Tabs count="文章,活动,发帖,我" active="活动" />
        });
    }
});
adminRoutes.route("/atom", {
    name: 'atom',
    action: function(){
        ReactLayout.render(App, {
            content: <Atom />,
            tabs: <Tabs count="文章,活动,发帖,我" active="发帖" />
        });
    }
});
adminRoutes.route("/atom_detail", {
    name: 'atom_detail',
    action: function(params, queryParams){
        ReactLayout.render(App, {
            content: <AtomDetail atomId={queryParams.atomId} />
        });
    }
});
adminRoutes.route("/publish_atom", {
    name: 'publish_atom',
    action: function(){
        ReactLayout.render(App, {
            content: <PublishAtom />
        });
    }
});
adminRoutes.route("/me", {
    name: 'me',
    action: function(){
        ReactLayout.render(App, {
            content: <Me />,
            tabs: <Tabs count="文章,活动,发帖,我" active="我" />
        });
    }
});
adminRoutes.route("/PCarticle", {
    name: 'PCarticle',
    action: function(){
        ReactLayout.render(App, {
            content: <PCarticle />
        });
    }
});
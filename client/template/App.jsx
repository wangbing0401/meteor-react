App = React.createClass({
    // This mixin makes the getMeteorData method work
    page_back:function(){
        history.back();
    },
    render:function() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">login</a>
                        {FlowRouter.current().route.name == 'home' ? '' :
                        <ul id="nav-mobile">
                            <li><a onClick={this.page_back}>返回</a></li>
                        </ul>
                            }
                    </div>
                </nav>

                <ul className="container">
                    {this.props.content}
                </ul>
            </div>
        );
    }
});
App = React.createClass({
    // This mixin makes the getMeteorData method work

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">login</a>
                    </div>
                </nav>

                <ul className="container">
                    {this.props.content}
                </ul>
            </div>
        );
    }
});
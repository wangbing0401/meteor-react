Side = React.createClass({
    render:function(){
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a className="collapsible-header">Dropdown<i className="mdi-navigation-arrow-drop-down"></i></a>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><a href="#!">First</a></li>
                                        <li><a href="#!">Second</a></li>
                                        <li><a href="#!">Third</a></li>
                                        <li><a href="#!">Fourth</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li>
                    <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="mdi-navigation-arrow-drop-down right"></i></a></li>
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!">First</a></li>
                        <li><a href="#!">Second</a></li>
                        <li><a href="#!">Third</a></li>
                        <li><a href="#!">Fourth</a></li>
                    </ul>
                </ul>
            </div>
        )
    }
});
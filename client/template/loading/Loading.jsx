Loading = React.createClass({
    render:function(){
        var loading_ceng = {position:'fixed', width:'100%', height:'100%', backgroundColor:'#323232', opacity:'0.8', top:'0', textAlign:'center', zIndex:'1001'};
        return(
            <div style={loading_ceng}>
                <div className="preloader-wrapper big active" style={{top:'45%'}}>
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
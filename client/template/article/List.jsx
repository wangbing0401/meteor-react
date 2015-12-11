List = React.createClass({
    getData:function(){
        return [
            {key:'0', name:'wb'},
            {key:'1', name:'wx'}
        ];
    },
    renderData:function(){
        return this.getData().map((data) => {
            return <Item key={data.key} />
        });
    },
    render:function(){
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
});
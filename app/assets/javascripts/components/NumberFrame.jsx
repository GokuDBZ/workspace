class NumberFrame extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        numbers = []
        clickNumber = this.props.clickNumber;
        var sel_numb = this.props.selectedNumbers;
        var used_numbers = this.props.usedNumbers;
        for(var i=1;i<10;i++){
                class_value = "number"
                if(used_numbers.includes(i)){
                    class_value = "number used"
            }else if(sel_numb.includes(i)){
                class_value = "number disabled"
            }
            numbers.push(<div className={class_value} onClick={clickNumber.bind(null,i)}>{i}</div>)
        }
        return(
            <div id="numbers-frame">
                <div className="well">{numbers}</div>
            </div>
            )
    }
}
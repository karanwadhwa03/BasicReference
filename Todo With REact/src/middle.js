import React ,{Component} from 'react'
import Listitems from './listitems'


class Middle extends Component{
    state={
        items:[
            
            
        ],
        text:'',
        id:0
    }
    changed=(e)=>{
        var use=e.target.value;
        this.setState({
            text:use
        })
        //console.log(use)
    }
    addedHandler=()=>{
        var obj={text:'',id:0 };
        var first=this.state.text;
        
        var second=this.state.id+1;
        obj.text=first;
        obj.id=second;
        var Litems=[...this.state.items,obj];
        this.setState({
            items:Litems,
            text:'',
            id:second
        })

       // console.log(this.state.items)
    }
    deleteHandler=(id)=>{
        var use=[...this.state.items];
        var Index=use.findIndex(el=>
            el.id===id
        )
        use.splice(Index,1);
        this.setState({
            items:use
        })

    }

    render(){
        var Show=[...this.state.items].map(el=>{
            return (
                <Listitems data={el.text} key={el.id} deleted={()=>this.deleteHandler(el.id)}></Listitems>
            )
        }

        )


    return (
        <div className="row justify-content-center">
            <div className=" col-md-4 border p-4 mt-5">
            <input type="text" className="form-control w-75 d-inline-block" onChange={(e)=>this.changed(e)} value={this.state.text}></input>
            <span>
            <button className="btn btn-primary ml-1" onClick={this.addedHandler}>
            ADD
            </button>
            </span>
            <hr></hr>
            {Show}

            </div>
        </div>
    )}

}
export default Middle
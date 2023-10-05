import React, {Component} from "react";
class Slogan extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state={
        count:0,
    }
  }

  componentDidMount() {
    console.log("mounting children");
  }

  componentDidUpdate(){
    console.log("updating Children")
  }

  componentWillUnmount(){
    console.log("memory freed up.. Children ")
  }

  render() {
    const {slogan}=this.props;
    return (
      <>
        <div className="Slogan">{slogan}</div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=>{this.setState({
            count:this.state.count +1
        })}}>Click me</button>
      </>
    );
  }
}
export default Slogan;

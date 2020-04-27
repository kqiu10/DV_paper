import React from "react";
import ReactDOM from "react-dom";
import GetBitcoin from "../HelperBitcoinAPI/GetBitcoin";
import ShowLineChart from "./ShowLineChart.jsx";
import ShowBarChart from "./ShowBarChart.jsx";
import ShowPieChart from "./ShowPieChart.jsx"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpis: {},
      ShowLine: false,
      ShowBar: false,
      ShowPie:false
    };
    this.handleLineChart = this.handleLineChart.bind(this)
    this.handlePieChart = this.handlePieChart.bind(this)
    this.handleBarChart =this.handleBarChart.bind(this)
  }
  componentDidMount() {
    this.handleStateBpis();
  }
  handleStateBpis() {
    GetBitcoin()
      .then(response => {
        console.log(response);
        this.setState({ bpis: response });
      })
      .catch(err => console.log("fail refresh bpis"));
  }
  handleLineChart() {
    this.setState({ShowLine:!this.state.ShowLine,ShowBar:false,ShowPie:false})
  }
  handleBarChart() {
    this.setState({ShowBar:!this.state.ShowBar,ShowLine:false,ShowPie:false})
  }
  handlePieChart() {
    this.setState({ShowPie:!this.state.ShowPie,ShowBar:false,ShowLine:false})
  }


  render() {
    return (
      <div>
        <br></br>
        <body>
          <section className="section w3-teal">
            <div className="container ">
              <h1 className="title  w3-text-white">
                {" "}
                <img
                  src=" https://cdn3.iconfinder.com/data/icons/one-piece-flat/48/Cartoons__Anime_One_Piece_Artboard_37-512.png"
                  alt="Luffy icon"
                  width="72"
                  height="72"
                ></img>
                 Charting Tool
              </h1>
              <h2 className="subtitle  w3-text-white">
                A simple time-series chart to show{" "}
                <strong  className="w3-text-white">Parking Violations</strong>
              </h2>
            </div >
          </section >
        </body>
        <div>
        <div className="tabs is-centered is-medium">
  <ul>
    <li >
      <a  onClick ={this.handleLineChart}>Line</a>
    </li>
    <li >
      <a onClick ={this.handlePieChart}>Pie</a>
    </li>
    <li >
      <a onClick ={this.handleBarChart}>Bar</a>
    </li>
  </ul>
</div>
        </div>
        <br></br>
        <br></br>
        <div>
          {this.state.ShowLine ? <ShowLineChart data={this.state.bpis} /> : null}
          {this.state.ShowBar ? <ShowBarChart data={this.state.bpis} /> : null}
          {this.state.ShowPie ? <ShowPieChart data={this.state.bpis} /> : null}
          </div>
        </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

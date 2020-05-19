import React, { Component } from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
};

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false,
            turasayisi: 0,
            yazisayisi: 0
        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true
        });

        const rastgeleEleman = getRandomElFromArr(options);
        if (rastgeleEleman === "yazi") {
            this.setState({ yazisayisi: this.state.yazisayisi + 1 });
        }
        else {
            this.setState({ turasayisi: this.state.turasayisi + 1 });
        }

        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false,
            })

        }, 300);
    }

    render() {
        const { currentStatus, donuyor, gelenler, turasayisi, yazisayisi } = this.state;
        return (
            <div>
                <Coin currentStatus={currentStatus} donuyor={donuyor} />
                <button onClick={this.atisYap}>Parayı At</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi</h3>
                }
                <h3>Toplam atış sayısı : {gelenler.length}</h3>
                <h3>Tura sayısı : {turasayisi}</h3>
                <h3>Yazi sayısı : {yazisayisi}</h3>
            </div>
        );
    }
}

export default CoinFlipper;
import React, { useState } from "react";

/* class 컴포넌트
class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        // 초기값
        this.state = {
            isConfirmed: false
        };

        //this.handleConfirm = this.handleConfirm.bind(this);
    }

    //handleConfirm() {
    //    this.setState((prevState) => ({
    //        isConfirmed: !prevState.isConfirmed
    //    }));
    //} 

    // Class fields syntax 
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
                </button>
        );
    }
}*/

// 함수 컴포넌트 useState 훅을 사용해 처리
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
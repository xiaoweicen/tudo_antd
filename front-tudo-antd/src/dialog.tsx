import React from 'react';
import { Input } from 'antd';
import './App.css';

class Dialog extends React.Component<{ addNewTask: any; nums: number }>{
    
    

    constructor(props: Readonly<{ addNewTask: any; nums: number; }>) {
        super(props);
        
        
         this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value:string) {

        if (value !== '') {
            
            this.props.addNewTask(value);

        }
    }

    render() {
        return (
            // <div className="App">
            //     <Input.Search  type="text"  placeholder="请输入事项" 
            //     enterButton="添加" onChange={this.handleChange}
            //     onSearch={this.handleClick}/>            </div>

                <Input.Search
                placeholder="请输入事项"
                enterButton="添加"
                size="large"
                onSearch={this.handleClick}
              />


        );
    }
}

export default Dialog;
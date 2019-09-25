import React from 'react';
import Item from './item';
import axios from 'axios';
import Dialog from './dialog'

import { Table ,Button} from 'antd';
//import ListItem from './listItem';

//import { Button } from 'antd';
import './App.css';

class TodoList extends React.Component {
    public state: { list: Item[], listfinish:number[],finishcount: number };


    constructor(props: { list: Item[]; }) {
        super(props);

        this.state = {
            list: [],listfinish:[], finishcount: 0
        };
        this.update();
    }
    public request(sss: string) {
        const url = 'http://localhost:3000/' + sss;
        console.log(url);
        axios.get(url)
            .then(response => {
                const result = response.data;
                //const {name,html_url} = result.items[0];
                console.log(result);
                this.setState(result);
            });



    }

    public addTask(name: string): void {
        this.request("add?name=" + name);
    }

    update() {
        this.request("refresh");
    }

    finish(id: number) {
        this.request("finish?key=" + id);
    }

    finishAll() {
        this.request("finishall");
    }

    finishNone() {
        this.request("finishnone");
    }



    delete(id: number) {
        
        this.request("delete?key=" + id);
    }



    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: (text: any, record: any) => (

                    <Button type="link" onClick={() => this.delete(record.key)}>删除</Button>
                  ),
            },
        ]

        const rowSelection = {
            
            onSelect:(record: any) => {
                
                this.finish(record.key)
            },

            onSelectAll:(selected:boolean)=> {
                if(selected){
                    this.finishAll();
                }else{
                    this.finishNone();
                }
                
                
            },
            selectedRowKeys:this.state.listfinish,

        };


        return (
            <div>
                <h1>ToDo</h1>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />

                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.list} />

                <ul>

                    <li>{this.state.finishcount} / {this.state.list.length}完成</li>
                </ul>
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>ToDo</h1>
    //             <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />
    //             <ul>
    //                 {this.state.list.map((item, index) =>
    //                     <ListItem
    //                         item={item}
    //                         finish={this.finish.bind(this)}
    //                         delete={this.delete.bind(this)}
    //                         key={index}
    //                     />
    //                 )}
    //                 <li>{this.state.finishcount} / {this.state.list.length}完成</li>
    //             </ul>
    //         </div>
    //     );
    // }
}

export default TodoList;
import Item from "./item";
import { listenerCount } from "cluster";

class ListItem {
    list: Item[] = [new Item("写代码"), new Item("读书"), new Item("打篮球")];
    listfinish:number[]=[];
    finishcount: number = 0;
    

    handleAdd(newName: string) {
        let newitem: Item = new Item(newName);
        this.list.push(newitem);
        return this.handlerefresh();
    }

    handleDelete(key: number) {
        this.list.splice(key,1);
        return this.handlerefresh();

    }

    handleFinished(key: number) {
        this.list[key].finish();
        return this.handlerefresh();
    }

    handleFinishAll() {
        this.listfinish=[];
        this.list.forEach((item, index) => {
            this.list[index].key = index;
            
            item.complete=true
            this.listfinish.push(index);
            
        });
        this.finishcount = this.list.length;
        return this;
    }

    handleFinishNone() {
        this.list.forEach((item, index) => {
            this.list[index].key = index;
            item.complete=false
        });
        this.listfinish=[];
        this.finishcount = 0;
        return this;
    }



    handlerefresh() {
        let count = 0;
        this.listfinish=[];
        this.list.forEach((item, index) => {
            this.list[index].key = index;
            
            if (item.complete) {
                this.listfinish.push(index);
                count++;
            }
        });
        this.finishcount = count;
        return this;
    }


}

export default ListItem;
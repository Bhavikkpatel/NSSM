export default class door {
    constructor(id, dname, imgsrc) {
        this.id = id;
        this.dname = dname;
        this.imgsrc = imgsrc;
    }
    
    list = [
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
        {dname: "door", imgsrc: "./Pictures/"},
    ];

    get getlist() {
        var dlist = [];
        var l = this.list.length;
        for(var i=1;i<=l;i++) {
            dlist.push(new door(i, this.list[i-1].dname, this.list[i-1].imgsrc)); }
        return dlist;
    }
}
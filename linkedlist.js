function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function(head,data){
        if (head == null) return new Node(data);
        else if (head.next == null) head.next = new Node(data);
        else this.insert(head.next, data);
        return head;
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		



// https://drive.google.com/open?id=17jSKEeRyfslVV2ra3HhiP3TpiHkzilTD
// https://drive.google.com/open?id=1uuM2CLe1J3I4nOrgXUGM5ZPinGiANMNw
let deliveryBoy = {
	name: "John",
	handleMessage:function (message,handler){
		handler(message)
	},
	receive: function(){
		var that = this;
		return this.handleMessage("deliveryBoy,hello, ", message => console.log(message + that.name) )
	}
}; 

//deliveryBoy.receive();

export default deliveryBoy;
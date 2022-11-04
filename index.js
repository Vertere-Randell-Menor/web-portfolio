// console.log('Hello World');

AOS.init();


let sendContactSuccessful = function(){
	Swal.fire(
	{
		title: 'Message Sent!',
		text: "",
		icon: 'success',
		confirmButtonColor: '#403d39ff'
	}
	)
}
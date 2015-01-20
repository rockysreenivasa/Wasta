var User = Backbone.Model.extend({
	initialize: function(){
      console.log('This model has been initialized.');
  }
	defaults: {
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email_address: '',
	address: '',
	city: '',
	state: '',
	zip: '',
    credit_card: '',
    cc_type:'',
    expiration_date: ''
	}
});
console.log(JSON.stringify(User));
User.validate = function(attrs){
	if(!attrs.username){
		return 'Please provide username';
	}
	if(!attrs.password){
		return 'Please provide password';
	}
	if(!attrs.email_address){
		return 'Please provide email_address';
	}
	if(!attrs.credit_card){
		return 'Please provide credit_card number';
	}
	if(!attrs.cc_type){
		return 'Please provide credit card type (VISA/MasterCard/AMEX/Discover)';
	}
	if(!attrs.expiration_date){
		return 'Please provide expiration_date of the credit_card';
	}
};
var UserCollection = Backbone.Collection.extend({
  model: User,
  url: '/users'
});

/*var users = new UserCollection();
users.fetch(); // sends HTTP GET to /users
var CreateUser = users.get(2);
CreateUser.set('username',' ');
CreateUser.save(); //sends HTTP PUT to /users/2*/
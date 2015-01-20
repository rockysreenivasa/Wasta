var UserView = Backbone.View.extend({
    tagName: 'div',
    className: 'userContainer',
    template: _.template( $( '#userTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});

events:{
    'click #add':'addUser'
},

addUser: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addUser div' ).children( 'input' ).each( function( i, el ) {
        if( $( el ).val() != '' )
        {
            formData[ el.id ] = $( el ).val();
        }
    });

    this.collection.add( new addUser( formData ) );
},
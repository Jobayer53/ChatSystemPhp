import './bootstrap';

$(document).ready(function(){

    $(document).on('click', '#send_message',function(e){
        e.preventDefault();

        let username = $('#username').val();
        let message = $('#message').val();

        if(username == '' || message == ''){
            alert('please enter both user name and message');
            return false;
        }

        $.ajax({
            method:'POST',
            url:'/send-message',
            data:{ username:username, message:message},
            success:function(res){
                    //
            }
           
        });


    });


});

window.Echo.channel('chat')
    .listen('.message',(e)=>{
        $('#messages').append('<p><strong>'+e.username+'</strong>'+': '+ e.message+'</p>');
        $('#message').val();
    })
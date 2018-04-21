$.ajax('/apis',{
    accepts: 'application/json',
    success : function(data,status){
        var body = $('body');
        data.forEach(function (data){
            var ele = '<div>'+ data.username+' : ' + data.age + '</div>';
             body.append(ele);
        })
    },
    error: function (ajax, status,err){

    }
});

$('#submitBtn').on('click',function(e){
    var username =$('input[name="username"]').val();
    var age =$('input[name="age"]').val();
    $.ajax("apis/user/create",{
        method: "POST",
        contentType:"application/json",
        data:JSON.stringify({
            username:username,
            age:age
        }) ,
        success:function(data,status){
            var body = $('body');           
                var ele = '<div>'+ data.user.username+' : ' + data.user.age + '</div>';
                 body.append(ele);
            
            
        },
        error: function (ajax, status,err){

        }
    })
})
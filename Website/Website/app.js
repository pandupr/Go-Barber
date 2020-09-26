var me = {};
me.avatar = "head.png";
/*me.avatar = "https://avatars2.githubusercontent.com/u/11194525?s=460&v=4?sz=48";*/
var you = {};
you.avatar = "barb.jpg";
/*you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";*/

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var minuteafter = date.getMinutes()+30;
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    minuteafter = minuteafter < 10 ? '0'+minuteafter : minuteafter;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}      

function formatAMPMafter(date) {
    var hours = date.getHours();
    var minuteafter = date.getMinutes()+40;
    if(minuteafter >= 60) {
        minuteafter = minuteafter % 60;
        hours = hours + 1;
    }
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minuteafter = minuteafter < 10 ? '0'+minuteafter : minuteafter;
    var strTime = hours + ':' + minuteafter + ' ' + ampm;
    return strTime;
}   

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me"){

        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                   
    }else {
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }

    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);

}

function insertChatAfter(who, text, time = 0){
    var control = "";
    var date = formatAMPMafter(new Date());

    if (who == "me"){

        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                   
    }else {
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }

    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);

}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChatAfter("me", text);              
            $(this).val('');
        }
    }
});

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("me", "Pagi...", 0);  
insertChat("you", "Selamat Pagi juga Pak", 1500);
insertChat("you", "Saya Go-Barber!, barber dari A Shop", 3500);
insertChat("you", "Boleh minta alamatnya Pak?", 7000);
insertChat("me", "Alamat saya di Jl. abcdefgh No. xx", 10000);
insertChat("you", "Oke pak, saya ke sana 30 menit sebelum waktu appointment ya",13000);
insertChat("you", "Nanti saya akan beritahu bapak kalau saya sudah sampai",16000);
insertChat("me", "Siap. Ditunggu ya pak..", 17500);
insertChat("you", "Oke, Siap Pak", 19000);
insertChatAfter("you", "Pak, saya sudah sampai di depan rumah bapak", 21000);
insertChatAfter("me", "Oke, saya keluar sekarang", 23000);
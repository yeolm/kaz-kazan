console.log("start");
var numbers=[];

function login(){
    let data={
        "ad":document.getElementById("ad").value,
        "tcode":document.getElementById("tcode").value
        
    };

            $.ajax({
            type: "POST",
            url: 'login.php',
            data:data,
            success: function(response)
            {
                var jsonData = JSON.parse(response);
 
                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.login == "1")
                {
                    $.fancybox.close();
                }
                else if(jsonData.login == "0"){
                    alert("Geçersiz kullanıcı adı veya ticket kodu");
                    document.getElementById("ad").value="";
                    document.getElementById("tcode").value="";
                }
           }
       });

}
$.ajax({
            type: "POST",
            url: 'number.php',
            success: function(response)
            {
                var jsonData = JSON.parse(response);
                numbers=jsonData.numbers;
                wVal=jsonData.winNumber;
                console.log(numbers);
                console.log(wVal);

function locate(id){
	var elm=document.getElementById(id);
	let translate3dValue="translate3d(-200px,-200px,0)";
	elm.style.transform=translate3dValue;
	
}
if (typeof Object.create !== 'function') {
    ScratchCard.create = function (obj) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
	
}
var scratchCardId = 0;
var isRevealing=false;
var r=0;
var kutMobile;

if(document.documentElement.clientHight<600){
	kutMobile="data:image/png;base64,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tq1tD99/9PFT7y/v+37vtO8vnU77p69Ppzun0/6h6/1083Tar/Z919Opy949mFk37Im36bmcd7ycgk01YuWzz0bB0rD5dxgR1XBp2PrPd2jSNAaJP6nKIxH9vhtT/kJVvi5u0DcVeJvA/p/+4889dhxPrPv33vHw+nr/yA/d/vZ7Dx89UJE3RORFEfm8CF5WkRdE8AkV+aiK3IKoyO6D79KB7rPWIRBY3GIe8c/Sxc23rRo0Q1lQliI3Ps1PDXjZbCciUWzMwl7pcFRPFmAKFdJEHonqd0l8S2FvKeRNM/ljQL8hiu9srZ2agN2ePKD/Dy0oH9xWQYOrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI0VDEwOjMxOjU5LTA0OjAw8U2ZsAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNFQxMDozMTo1OS0wNDowMIAQIQwAAAApdEVYdGRjOmZvcm1hdABhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9w5K2fVAAAAAp0RVh0bGFiZWwAS1VUVaFXHlIAAAAVdEVYdHBob3Rvc2hvcDpDb2xvck1vZGUAM1YCs0AAAAAmdEVYdHBob3Rvc2hvcDpJQ0NQcm9maWxlAHNSR0IgSUVDNjE5NjYtMi4xHC9sCwAAAB96VFh0cmRmOkJhZwAAOMvjUkAFXKP8Uf4of5Q/EvgAOVCYwWLAq6kAAAAUdEVYdHRpZmY6WFJlc29sdXRpb24AMTUwIssSigAAABR0RVh0dGlmZjpZUmVzb2x1dGlvbgAxNTCbMMliAAAAKHRFWHR4bXA6Q3JlYXRlRGF0ZQAyMDE4LTA5LTAxVDE2OjQwOjE1KzAzOjAwezxyKAAAADF0RVh0eG1wOkNyZWF0b3JUb29sAEFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKThRt+4AAAAqdEVYdHhtcDpNZXRhZGF0YURhdGUAMjAxOS0wNy0xMlQxNzo1NDo0MSswMzowMHcBnAAAAAAodEVYdHhtcDpNb2RpZnlEYXRlADIwMTktMDctMTJUMTc6NTQ6NDErMDM6MDBLpc++AAAAS3RFWHR4bXBNTTpEb2N1bWVudElEAGFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4NThmNzgyMS1kMjg2LWU0NGEtOWY5NS0yNGI4NTk5NjEyMjmhnDN/AAAAPXRFWHR4bXBNTTpJbnN0YW5jZUlEAHhtcC5paWQ6ZDU2NGE2MWMtOWYyNi1mOTRiLTg1YTItYTVkZTQ2OGY4MGNmMqKkzQAAAEV0RVh0eG1wTU06T3JpZ2luYWxEb2N1bWVudElEAHhtcC5kaWQ6MDgzY2RjMmUtM2ZkNi00OWFjLTk4OTUtNDkwZGVjNTAxOTA2qwmP/gAAAABJRU5ErkJggg==";
}
 
var wVal;
var val=numbers;
var w=0;
var cards=[];
var cc=0;
(function ($, window, document, undefined) {
	
		
	
    var scratchCardTemplate = $("<Canvas class='scratchCanvas' style='display:none'></Canvas>");
    var ScratchCard = {
        init: function (options, elem) {
            var self = this;
			self.id=scratchCardId;
			self.isRevealed=false;
			self.value=val[self.id];
			
            self.elem = elem;
            self.$elem = $(elem);
			
            self.options = $.extend({}, $.fn.rabidScratchCard.options, options);
            self.options.backgGroundImage = "http://placehold.it/80&text="+numbers[scratchCardId];
            scratchCardId++;
            if(kutMobile===undefined){
                self.options.foreGroundImage = self.$elem.data("foregroundimage");
            }
            else{
                self.options.foreGroundImage = kutMobile;                
                
            }
           

            self.loadedImages = 0;

            var canvasBgImg = new Image();
            canvasBgImg.onload = function () {
                self.newScratchCanvas = $("<Canvas class='scratchCanvas' id='card"+self.id+"'"
                
                +" style='display:none'></Canvas>");
                self.$elem.html(self.newScratchCanvas);
                self.theCanvas = self.newScratchCanvas;

                self.ctx = self.theCanvas[0].getContext("2d");


                $(window).bind('mousedown', $.proxy(self.addDownHandler, self));
				self.theCanvas.bind("mousedown",$.proxy(self.selectId,self));
                self.theCanvas.bind('mouseup', $.proxy(self.addUpHandler, self));
                $(window).bind('mouseup', $.proxy(self.addUpHandler, self));
                self.theCanvas.bind('touchmove', $.proxy(self.touchmoveHandler, self));
				self.theCanvas.bind('touchstart', $.proxy(self.touchStart, self));
				self.theCanvas.bind("mouseout",$.proxy(self.outId,self));
                $(self.theCanvas).css({
                    "backgroundImage": "url(" + canvasBgImg.src + ")",

                })

                self.theCanvas[0].width = canvasBgImg.width;
                self.theCanvas[0].height = canvasBgImg.height;
                self.loadedImages++;

                self.theCanvas.css("display", "inline")
                self.initX = self.theCanvas.offset().left;
                self.initY = self.theCanvas.offset().top;


            };



            var bgImg = new Image();
            bgImg.onload = function () {
                self.srcImg = bgImg;
                canvasBgImg.src = self.options.foreGroundImage;
            }
            bgImg.src = self.options.backgGroundImage;



        },

        addDownHandler: function (e) {
            var self = this;

            self.theCanvas.bind('mousemove', $.proxy(self.mouseMoveHandler, self));
        },		
		selectId:function(e){
			var self=this;
			console.log("mousedown"+self.id);
			scratchCardId=self.id;
		},
		touchStart:function(e){
			var self=this;
			console.log("touchstart:"+self.id);
			scratchCardId=self.id;
		},
		outId:function(){
			scratchCardId=-1;
			
		},
        addUpHandler: function (e) {
            var self = this;
            self.theCanvas.unbind('mousemove')

        },
        mouseMoveHandler: function (e) {
            var self = this;
            var mouseX = e.pageX - e.currentTarget.offsetLeft;
            mouseY = e.pageY - e.currentTarget.offsetTop;
            self.reveal(mouseX, mouseY, self);
        },

        touchmoveHandler: function (e) {
            var self = this;
            e.preventDefault();
            var event = window.event;
            mouseX = event.touches[0].pageX - self.initX;
            mouseY = event.touches[0].pageY - self.initY;
            self.reveal(mouseX, mouseY, self);
        },
        reveal: function (mouseX, mouseY, self) {
            console.log(scratchCardId);
			if(scratchCardId!=self.id ) return;
			if(!self.isRevealed){
				self.isRevealed=true;
				r++;
				console.log("self:"+self.value+"vWal:"+wVal);
				if(self.value==wVal) w++;
			}
            self.ctx.save();
            // Can't make a true circle, so we make an arced line that happens to trace a circle - 'i' is used to define our radius.
            self.ctx.arc(mouseX, mouseY, self.options.revealRadius, 0, 2 * Math.PI, false);
            self.ctx.clip();
            self.ctx.drawImage(self.srcImg, 0, 0);
            self.ctx.restore();

        }
    }


    $.fn.rabidScratchCard = function (options) {
        return this.each(function () {
            console.log("hey");
            var scratchCard = Object.create(ScratchCard);
            scratchCard.init(options, this);
            cards[cc++]=scratchCard;
        });
    };
    //Defaults
    $.fn.rabidScratchCard.options = {

        foreGroundImage: null,
        backgGroundImage: null,
        revealRadius: 30


    };
})(jQuery, window, document);
var played = false;
$(document).ready(function(){
    console.log(numbers);
    //cards[1].options.backgGroundImage="http://placehold.it/80&text=7";

	 $("#game").fadeIn();

    $(".column").rabidScratchCard({
        revealRadius: 30
    });

    $("body").bind("mouseup touchend", (function () {
        console.log(""+w+":"+r+":"+wVal);
		if(w==3 && !played){
			played=true;
			console.log(r);
			alert("You are winner!");
		} 
		else if(r==6 && !played){
		    console.log(r);
		    alert("You are not lucky this time!");
		}

		
    }));


       $.fancybox.open({
            padding: 0,
            src: '#LoadPopupLogin',
            type: 'inline',
            touch: false,
            animationEffect: 'fade',
            modal: true

        });
			$("#LoadPopupLogin").submit(function(){
		$.fancybox.close();

	});
});
           }
       });



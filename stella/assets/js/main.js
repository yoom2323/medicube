$(function(){

    window.onbeforeunload = function pushRefresh() {
		window.scrollTo(0, 0);
	};

    $('.gnb-menu .menu-btn').click(function(e){
        $('.menu-btn,.menu-page').toggleClass('on');
        $('body').toggleClass('hidden');
    })


    // 세팅
    const mainText = new SplitType('.sc-visual p', { types: 'words, chars', });
    gsap.set('.sc-visual .char',{ scale:1.1, opacity:0 })

    // intro
    //시간순서대로 실행
    //stagger 하나하나씩 0.?딜레이를갖고
    const intro = gsap.timeline({})

    intro
    .addLabel('b')
    .to('.sc-visual .bg',{ delay:2, height:0,
        onComplete:function(){
            $('body').removeClass('hidden');
        }
    },'b')
    .to('.sc-visual .rect',{opacity:0,visibility: 'hidden'},'b+=2')
    .addLabel('a')
    .from('.sc-visual .img-box',2,{ scale:1.1, },'a')
    .to('.sc-visual .char',2,{ scale:1, opacity:1, stagger:0.1, },'a')

 

    // intro 스크롤내렸을때
    //scrollTrigger

    gsap.to('.sc-visual .img-box video',{ 
        scrollTrigger:{ 
            trigger:".sc-visual", //기준점
            start:"0% 0%", //시작지점 [트리거기준,윈도우기준] 둘이 만나면실행
            end:"100% 0%", //끝나는지점
            // markers:true, //표시자 현재위치를알수있음
            scrub:0, //마우스를 위아래로 스크롤하는효과
        },
        yPercent:30,
        ease:'none'
    })


    $('.group-product').each(function(index,element){
        xVal=$(this).data('x');
        const prd1 = gsap.timeline({
        scrollTrigger:{
            trigger:element, //기준점
            start:"0% 60%", //시작지점 [트리거기준,윈도우기준] 둘이 만나면실행
            end:"100% 0%", //끝나는지점
            // markers:true, //표시자 현재위치를알수있음
            // scrub:0, //마우스를 위아래로 스크롤하는효과
        },
        })
        .from( $(this).find('.img-box img') ,{opacity:0,yPercent:10})
        .from( $(this).find('.text-box .title'),{opacity:0,yPercent:10})
        .from( $(this).find('.text-box .desc'),{opacity:0,yPercent:xVal})
        .from( $(this).find('.product .wrap'),{opacity:0,xPercent:xVal})
    
    })




    //   <h2>BEAUTY INNOVATION</h2>
    $('.sc-intro .thumb').each(function(index,element){
        gsap.to($(this).find('img'),{ 
            scrollTrigger:{
                trigger:element, //기준점
                start:"0% 100%", //시작지점 [트리거기준,윈도우기준] 둘이 만나면실행
                end:"100% 0%", //끝나는지점
                scrub:1, //마우스를 위아래로 스크롤하는효과
            },
            top:-100
        })
    })






})
$(function(){
    $('#fullpage').fullpage({
        sectionsColor: ['#F24405','#49d6b4','#779aee','#ed77a9','#404040','#4BBFC3','#ddd'],
        anchors:['home','about','web','contact'],
        autoscrolling:true,
        scrollHorizontally:true,
        navigation:true,
        navigationPosition:screenLeft,
        autoplay:false,
        arrows:false,
      
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션  " + index);
            if(index==7){
                alert("현재 포트폴리오의 마지막 부분입니다.")
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
          console.log('현재 슬라이드 번호는: '+ slideIndex)
        },

    })
    $(".line").click(function(){
        $(".line").hide()
        $(".m_menu").toggleClass('on')
        $(".cover").fadeIn()
        $('.line2').show()
    })
    $('.line2').click(function(){
        $('.line2').hide()
        $('.line').show()
        $('.cover').fadeOut()
        
        // location.href='index.hmtl'
    })
    $('.cover li').click(function(){
        $('.line2').hide()
        $('.line').show()
        $('.cover').fadeOut()
    })
    $('.num1').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/portfolio%28onepage%29/index.html')
    })
    $('.num2').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/javascript/13_daelim/index.html')
    })
    $('.num3').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/08_banner(slide)/index.html')
    })
    $('.num4').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/11_subway(mobile)/index.html')
    })
    $('.num5').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/09_LG(mobile)/index.html')
    })
    $('.num6').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/10_asan(mobile)/index.html')
    })

    $('.num7').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/26_elite(rwd)/index.html')
    })
    $('.num8').click(function(){
        location.replace( 'https://lyckjw963.cafe24.com/jQuery/27_puma(rwd)/index.html')
    })
  
})
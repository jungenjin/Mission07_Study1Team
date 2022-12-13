$(document).ready(function(){
  
    //메뉴 슬라이드
    $('#m_QA  a.m1').click(function(){
      $(this).next($('.m1, ul')).slideToggle('fast');
    })
    $('#m_QA  ul li a.m2').click(function(e){
      e.stopPropagation();
      $(this).next($('ul, .m3')).slideToggle('fast');
    })
    $('#m_QA  ul li ul p a.m3').click(function(e){
        e.stopPropagation();
        $(this).next($('.A')).slideToggle('fast');
      })
    // // 버튼 클릭 시 스타일 변경
    // $('#m_QA  ul li ul p a.m3').focus(function(){
    //   $(this).addClass('selec');
    // })
    // $('#m_QA  ul li ul p a.m3').blur(function(){
    //   $(this).removeClass('selec');
    // })
    
  })
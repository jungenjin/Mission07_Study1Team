
$().ready(function () {
  $("#alertStart").click(function () {
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: '불편 사항 접수하기',
      inputPlaceholder: '어떤 점이 불편하신가요?',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }
  }); 
});
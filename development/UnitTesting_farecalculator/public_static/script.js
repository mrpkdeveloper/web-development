$(
    function () {
        let kmbox = $('#km')
        let minbox = $('#min')
        let calc_button = $('#calculate')
        let farediv = $('#fare')


        calc_button.click(function () {
            $.post('/calculator', {
                km: kmbox.val(),
                min: minbox.val()
            }, function (data) {
                farediv.text(data.fare)
            })
        })
    }
)
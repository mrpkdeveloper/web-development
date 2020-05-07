$(
    function () {
        let kmbox = $('#km')
        let minbox = $('#min')
        let calc_button = $('#calculate')
        let farediv = $('#fare')
        let ratebtn = $('#rate')
        let ratediv = $('#rate-div')


        calc_button.click(function () {
            $.post('/calculator', {
                km: kmbox.val(),
                min: minbox.val()
            }, function (data) {
                farediv.text(data.fare)
            })
        })


        ratebtn.click(function () {
            $.get('/rate', function (data) {
                let ratedata = `
                fixed rate = rs ${data.fixed} for ${data.minkm} km
                fare(distance) = rs ${data.perkm} / km
                fare(minutes) = rs ${data.permin} / min (after first ${data.freemin} min)

                `
                ratediv.text(ratedata)
            })
        })

    }
)
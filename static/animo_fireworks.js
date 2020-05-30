// https://github.com/codrops/Animocons
$(() => {
    var molinkEl = document.querySelector('.animo_fireworks'),
        moTimeline = new mojs.Timeline(),
        moburst1 = new mojs.Burst({
            parent: molinkEl,
            top:0, left:0,
            count: 6,
            radius: {0: 60},
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst2 = new mojs.Burst({
            parent: molinkEl,
            top:0, left:0,
            count: 14,
            radius: {0: 120},
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1600,
                delay: 100,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst3 = new mojs.Burst({
            parent: molinkEl,
            top:0, left:0,
            count: 8,
            radius: {0: 90},
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1500,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst4 = new mojs.Burst({
            parent: molinkEl,
            top:0, left:0,
            count: 14,
            radius: {0: 60},
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 2000,
                delay: 300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst5 = new mojs.Burst({
            parent: molinkEl,
            count: 12,
            top:0, left:0,
            radius: {0: 60},
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1400,
                delay: 400,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        });

    molinkEl.addEventListener('mouseenter', function (e) {
        moburst1
            .tune({x: e.pageX-400, y:e.pageY})
            .generate();

        moburst2
            .tune({x: e.pageX-300, y:e.pageY+100})
            .generate();

        moburst3
            .tune({x: e.pageX-503, y:e.pageY+80})
            .generate();

        moburst4
            .tune({x: e.pageX-280, y:e.pageY-80})
            .generate();
        moburst5
            .tune({x: e.pageX-150, y:e.pageY-160})
            .generate();
        moTimeline.add(moburst1,moburst2,moburst3,moburst4,moburst5);
        moTimeline.replay();
    });
});
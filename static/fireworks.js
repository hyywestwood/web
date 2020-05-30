var moburst1 = new mojs.Burst({
    top:0,left:0,
    count: 8,
    radius: {0: 80},
    children: {
        shape: 'polygon',
        points:     5,
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        duration: 2000,
        // radius: 15,
        // delay: 100,
        angle: { 360: 0 },
        delay: 'stagger(0, 100)'
        // easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    }
});

document.addEventListener('click', function (e) {
  const x = e.pageX,
        y = e.pageY;
  moburst1
    .tune({ x, y })
    .generate()
    .replay();
});
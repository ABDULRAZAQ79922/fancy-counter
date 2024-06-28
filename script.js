document.addEventListener('DOMContentLoaded', function() {
    let cuddleCount = 0;
    const cuddleDisplay = document.getElementById('cuddleCount');
    const cuddleButton = document.getElementById('cuddleBtn');

    cuddleButton.addEventListener('click', function() {
        cuddleCount++;
        cuddleDisplay.textContent = cuddleCount;

        cuddleDisplay.classList.add('animate');
        setTimeout(function() {
            cuddleDisplay.classList.remove('animate');
        }, 300);
    });
});

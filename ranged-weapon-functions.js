

const cancelCityTargeting = function(targetedCity) {
    document.querySelector('#weapon-non-targeted-city').textContent = targetedCity;
    document.querySelector('.city-target-unable').style.display = 'block';
    document.querySelector('.city-target-info').style.display = 'none';
    document.querySelector('.city-target-confirmation-window').style.display = 'flex';
}

const newCityTargeting = function(targetedCity, targetingCity) {
    document.querySelector('#weapon-targeted-city').textContent = targetedCity;
    document.querySelector('#weapon-targeting-city').textContent = targetingCity;
    document.querySelector('.city-target-unable').style.display = 'none';
    document.querySelector('.city-target-info').style.display = 'block';
    document.querySelector('.city-target-confirmation-window').style.display = 'flex';
}

const closeTargetingWindow = function() {
    document.querySelector('.city-target-confirmation-window').style.display = 'none';
}

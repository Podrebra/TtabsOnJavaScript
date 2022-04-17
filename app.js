const tabs = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item')

tabs.forEach(function(item) {
    item.addEventListener('click', function() {
        let tabsActive = item;
        let tabId = tabsActive.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)

        if( ! tabsActive.classList.contains ('active')) {

        }
        

        tabs.forEach(function(item){
            item.classList.remove('active')
        });

        tabsItem.forEach(function(item){
            item.classList.remove('active')
        });

        tabsActive.classList.add('active');
        currentTab.classList.add('active');
    });
});




document.querySelector('.tabs__nav-btn').click();
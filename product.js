

function changeProductList(type, element) {
    let tabs = document.getElementsByClassName('nav-box__text');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style = 'color:#4f4f4f;border-bottom: 0px'
    }
    element.style = 'color: #d02128; font-weight: 500; font-size: 15px; padding-bottom: 5px; border-bottom: #c00 2px solid;';

    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'today':
            document.getElementById('all').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'all':
            document.getElementById('today').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'food':
            document.getElementById('all').style.display = 'none';
            document.getElementById('today').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'drink':
            document.getElementById('all').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('today').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'vegetarian-food':
            document.getElementById('all').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('today').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'cream-cake':
            document.getElementById('all').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('today').style.display = 'none';
            document.getElementById('dessert').style.display = 'none';
            break;
        case 'dessert':
            document.getElementById('all').style.display = 'none';
            document.getElementById('food').style.display = 'none';
            document.getElementById('drink').style.display = 'none';
            document.getElementById('vegetarian-food').style.display = 'none';
            document.getElementById('cream-cake').style.display = 'none';
            document.getElementById('today').style.display = 'none';
            break;
    }
}




// display: block;
//     content: ' ';
//     border: 1px solid #d02128;
//     position: absolute;
//     bottom: 15px;
//     width: 100%;